mos = {
    "objectName": "EXPBUILDTREE",
    "className": "psdi.common.expbuilder.ExpBuilderObjectTreeSet",
    "description": "Non Persistent Object for Expression Builder Tree",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": false,
            "title": "Parent",
            "remarks": "parent",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CHILD",
            "required": false,
            "persistent": false,
            "title": "Child",
            "remarks": "child",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "remarks",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "OBJECTTYPE",
            "required": false,
            "persistent": false,
            "title": "objecttype",
            "remarks": "object type",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": false,
            "title": "Where Clause",
            "remarks": "where clause",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "MAXRELATIONSHIPID",
            "required": false,
            "persistent": false,
            "title": "id",
            "remarks": "relationship id",
            "sameAsAttribute": "MAXRELATIONSHIPID",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this node have kids",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this node have a parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RELATIONSHIPTREE",
            "source": "ACTION",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "COMMTEMPLATE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDTREE",
            "source": "EXPBUILDER",
            "remarks": "Relationship for exptree",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "INTGENERATOR",
            "remarks": "Relationship to get relationship tree for object type",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "EXPBUILDTREE",
            "source": "MAPTIP",
            "remarks": "Relationship for exptree.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "EXPBUILDTREE",
            "source": "MAPTIPMENU",
            "remarks": "Relationship for EXPTREE.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "MAXINTMAPPINGDETAIL",
            "remarks": "Relationship to get relationship tree for object name",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "MAXROLE",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "OSLCINTQUERYPARAMS",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "OSLCPREFILLMAP",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "REPORTLOOKUP",
            "remarks": "Relationship for REPORT LOOKUP TREE",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDTREE",
            "source": "SHOWWFCONDITION",
            "remarks": "Relationship for exptree.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "SHOWWFINTERACT",
            "remarks": "Relationship for WFINTERACTION TREE",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONSHIPTREE",
            "source": "SKDPROPERTYMAP",
            "remarks": "Relationship to get relationship tree for object type.",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDTREE",
            "source": "WFCONDITION",
            "remarks": "Relationship for exptree",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXPBUILDTREE",
            "source": "WFEXPBUILDER",
            "remarks": "Relationship to expression builder tree.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}