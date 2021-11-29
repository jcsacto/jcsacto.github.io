mos = {
    "objectName": "RECONRESULT",
    "className": "psdi.app.rcnresult.ReconResultSet",
    "description": "Result of Link and/or Comparison",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RECONRESULTID",
    "primaryKeyColumns": [
        "RECONRESULTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONRESULT",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "RECONRESULTID",
            "targetKeys": "RECONRESULTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Result",
            "longDescription": null
        },
        {
            "objectName": "RECONRESULT",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "RECONRESULTID",
            "targetKeys": "RECONRESULTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Result",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONRESULTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RULENAME",
            "required": false,
            "persistent": true,
            "title": "Rule",
            "remarks": "Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE"
        },
        {
            "attributeName": "DATECREATED",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date and time the reconciliation result record was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset",
            "remarks": "Unique database identifier of the deployed asset. All subordinate objects of a deployed asset, such as hard drives and software, are identified by the same node id.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHOBJECT",
            "required": false,
            "persistent": true,
            "title": "Asset Object",
            "remarks": "IT asset object that was reconciled.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "AUTHATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Asset Attribute",
            "remarks": "Attribute of the IT asset object that was reconciled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Asset Unit of Measure",
            "remarks": "Asset Measure Unit Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "Asset Date Time Value",
            "remarks": "Asset Date Time Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAOBJECT",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Object",
            "remarks": "Deployed asset object that was reconciled.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DPAKEYFIELD",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Key Field",
            "remarks": "Key for the deployed asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAKEYVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Key Value",
            "remarks": "Value of the key for the deployed asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Attribute",
            "remarks": "Attribute of the deployed asset object that was reconciled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Unit of Measure",
            "remarks": "Deployed Asset Measure Unit Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPADATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Date Time Value",
            "remarks": "Deployed Asset Date Time Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CODE",
            "required": false,
            "persistent": true,
            "title": "Message Key",
            "remarks": "Unique reconciliation message identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "Reconciliation result message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANCESTORASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Top Level Asset",
            "remarks": "Asset number of the top-level IT asset. This is the parent that is at the root or top level of the hierarchy.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANCESTORSITEID",
            "required": false,
            "persistent": true,
            "title": "Top Level Site",
            "remarks": "Site ID of the ancestor asset. The ancestor is the parent that is at the root or top level of the hierarchy.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number of the IT asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETVALUE",
            "required": false,
            "persistent": true,
            "title": "Asset Value",
            "remarks": "Value of the IT asset attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Value",
            "remarks": "Value for the deployed asset object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHORTASSETVALUE",
            "required": false,
            "persistent": false,
            "title": "Asset Value",
            "remarks": "Shortened Asset Value field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHORTDPAVALUE",
            "required": false,
            "persistent": false,
            "title": "Deployed Asset Value",
            "remarks": "Shortened DPA value field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESULTTYPE",
            "required": false,
            "persistent": true,
            "title": "Result Type",
            "remarks": "Used to categorize the type of reconciliation result.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOLVED",
            "required": true,
            "persistent": true,
            "title": "Resolved",
            "remarks": "Used to indicate the reconciliation result has been resolved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Used for comments while results asre being reviewed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECONTASKID",
            "required": false,
            "persistent": true,
            "title": "Task Id",
            "remarks": "Reconciliation Task ID",
            "sameAsAttribute": "RECONTASKID",
            "sameAsObject": "RECONTASK"
        },
        {
            "attributeName": "RECONTYPE",
            "required": false,
            "persistent": true,
            "title": "Reconciliation Type",
            "remarks": "Reconciliation Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User who last changed the record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Time the record was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Comparison Set",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find the ASSETATTRIBUTE for the RECONRESULT. The resulting set will contain one object.",
            "whereClause": "authattribute= :assetattrid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the RECONRESULT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONRESULT",
            "source": "ASSET",
            "remarks": "Relationship to the Reconresult table, used to find the reconresult records for the asset based on the NODEID in the reconlink table. The resulting set will contain one or more objects.",
            "whereClause": "reconresult.nodeid in (select nodeid from reconlink where reconlink.assetid=:assetid and reconlink.recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and reconlink.compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')) and code not in ('C3', 'C4','C1','C2') and recontype in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select value from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": "UNDEFINED"
        }
    ]
}