mos = {
    "objectName": "WOANCESTOR",
    "className": "psdi.app.workorder.WoAncestorSet",
    "description": "Relationship between a WO and an ancestor WO",
    "longDescription": "This is the ancestor table for Work Orders. More information about ancestor tables <a href=\"../../extra/AncestorTables.html\">here.</a> ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOANCESTORID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "ANCESTOR"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOANCESTOR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of Work Order and its descendants.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOANCESTOR",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "List of Work Order and its ancestors.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "WO Identifier",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ANCESTOR",
            "required": true,
            "persistent": true,
            "title": "Ancestor",
            "remarks": "WONUM of Ancestor WO",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "HIERARCHYLEVELS",
            "required": true,
            "persistent": true,
            "title": "Hierarchy Levels",
            "remarks": "Number of hierarchy levels between WO and Ancestor WO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "WOANCESTORID",
            "required": true,
            "persistent": true,
            "title": "WOANCESTORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "POLINERECEIPTS",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find whether all polines referced to this workorder has completed its receipts. The resulting set will contain zero or one object.",
            "whereClause": "receiptscomplete=:no and refwo=:wonum and siteid=:siteid and ponum in (select ponum from po where ponum=poline.ponum and status not in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('CAN','CLOSE')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOANCH",
            "target": "WOANCESTOR",
            "remarks": "Relationship to the WOANCESTOR table, used to find all woancestor that has the following condition  - ancestor in(select wonum from workorder where wonum=:wonum and parentchgsstatus=:yes and historyflag=:no) and hierarchylevels=1 and siteid=:siteid. The resulting set will contain zero or one object.",
            "whereClause": "ancestor in(select wonum from workorder where wonum=:wonum and parentchgsstatus=:yes and historyflag=:no) and hierarchylevels=1 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABTRANS_WOHIERARCHY",
            "source": "LABTRANS",
            "remarks": "Relationship from labtrans to woancestor",
            "whereClause": "(wonum=:refwo)and(siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOANCH",
            "source": "WOANCESTOR",
            "remarks": "Relationship to the WOANCESTOR table, used to find all woancestor that has the following condition  - ancestor in(select wonum from workorder where wonum=:wonum and parentchgsstatus=:yes and historyflag=:no) and hierarchylevels=1 and siteid=:siteid. The resulting set will contain zero or one object.",
            "whereClause": "ancestor in(select wonum from workorder where wonum=:wonum and parentchgsstatus=:yes and historyflag=:no) and hierarchylevels=1 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPWOANCESTOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOANCESTOR table, used to find all woancestor referced to this workorder. The resulting set will contain zero or one object.",
            "whereClause": "wonum=:wonum and ancestor=:wonum and hierarchylevels=0 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOANCESTOR",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOAncestor table, used to find workorder ancestor for a work order. (WOAncestor.ancestor = Workorder.wonum and WOAncestor.wonum = Workorder.wonum). This resulting set will contain one object. See the ANCESTORS & DESCENDANTS relationships.",
            "whereClause": "wonum=:wonum and ancestor=:wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORS",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOAncestor table, used to find all work order ancestors which are ancestors of the work order. (WOAncestor.wonum = Workorder.wonum and WOAncestor.ancestor != Workorder.wonum). This resulting set will contain zero or more objects. See the WOANCESTOR & DESCENDANTS relationships.",
            "whereClause": "wonum = :wonum and ancestor != :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}