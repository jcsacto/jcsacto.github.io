mos = {
    "objectName": "RECONASSETRESULT",
    "className": "psdi.app.rcnresult.asset.ReconAssetResultSet",
    "description": "Asset Result of Link and/or Comparison",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "RECONRESULTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "DPAOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Set 2 MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
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
            "objectName": "SITE",
            "targetObject": "RECONASSETRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONASSETRESULT",
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
            "sameAsAttribute": "RECONRESULTID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "RECONRESULTID",
            "tableName": "RECONRESULT",
            "tableColumnName": "RECONRESULTID"
        },
        {
            "attributeName": "RULENAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Rule Name",
            "sameAsAttribute": "RULENAME",
            "sameAsObject": "RECONRULE",
            "viewColumnName": "RULENAME",
            "tableName": "RECONRESULT",
            "tableColumnName": "RULENAME"
        },
        {
            "attributeName": "DATECREATED",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Date and time the reconciliation result record was created.",
            "sameAsAttribute": "DATECREATED",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DATECREATED",
            "tableName": "RECONRESULT",
            "tableColumnName": "DATECREATED"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "RECONRESULT",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "NODEID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset",
            "remarks": "Unique database identifier of the deployed asset. All subordinate objects of a deployed asset, such as hard drives and software, are identified by the same node id.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "NODEID",
            "tableName": "RECONRESULT",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "AUTHOBJECT",
            "required": false,
            "persistent": true,
            "title": "Asset Object",
            "remarks": "IT asset object that was reconciled.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "AUTHOBJECT",
            "tableName": "RECONRESULT",
            "tableColumnName": "AUTHOBJECT"
        },
        {
            "attributeName": "AUTHATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Asset Attribute",
            "remarks": "Attribute of the IT asset object that was reconciled.",
            "sameAsAttribute": "AUTHATTRIBUTE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "AUTHATTRIBUTE",
            "tableName": "RECONRESULT",
            "tableColumnName": "AUTHATTRIBUTE"
        },
        {
            "attributeName": "ASSETMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Asset Unit of Measure",
            "remarks": "Asset Measure Unit Id",
            "sameAsAttribute": "ASSETMEASUREUNITID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ASSETMEASUREUNITID",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETMEASUREUNITID"
        },
        {
            "attributeName": "ASSETDATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "Asset Date Time Value",
            "remarks": "Asset Date Time Value",
            "sameAsAttribute": "ASSETDATETIMEVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ASSETDATETIMEVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETDATETIMEVALUE"
        },
        {
            "attributeName": "DPAOBJECT",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Object",
            "remarks": "Deployed asset object that was reconciled.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "DPAOBJECT",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAOBJECT"
        },
        {
            "attributeName": "DPAKEYFIELD",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Key Field",
            "remarks": "Key for the deployed asset.",
            "sameAsAttribute": "DPAKEYFIELD",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPAKEYFIELD",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAKEYFIELD"
        },
        {
            "attributeName": "DPAKEYVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Key Value",
            "remarks": "Value of the key for the deployed asset.",
            "sameAsAttribute": "DPAKEYVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPAKEYVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAKEYVALUE"
        },
        {
            "attributeName": "DPAATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Attribute",
            "remarks": "Attribute of the deployed asset object that was reconciled.",
            "sameAsAttribute": "DPAATTRIBUTE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPAATTRIBUTE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAATTRIBUTE"
        },
        {
            "attributeName": "DPAMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Unit of Measure",
            "remarks": "Deployed Asset Measure Unit Id",
            "sameAsAttribute": "DPAMEASUREUNITID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPAMEASUREUNITID",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAMEASUREUNITID"
        },
        {
            "attributeName": "DPADATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Date Time Value",
            "remarks": "Deployed Asset Date Time Value",
            "sameAsAttribute": "DPADATETIMEVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPADATETIMEVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPADATETIMEVALUE"
        },
        {
            "attributeName": "CODE",
            "required": false,
            "persistent": true,
            "title": "Message Key",
            "remarks": "Unique reconciliation message identifier",
            "sameAsAttribute": "CODE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "CODE",
            "tableName": "RECONRESULT",
            "tableColumnName": "CODE"
        },
        {
            "attributeName": "MESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message",
            "remarks": "Reconciliation result message.",
            "sameAsAttribute": "MESSAGE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "MESSAGE",
            "tableName": "RECONRESULT",
            "tableColumnName": "MESSAGE"
        },
        {
            "attributeName": "ANCESTORASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Top Level Asset",
            "remarks": "Asset number of the top-level IT asset. This is the parent that is at the root or top level of the hierarchy.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ANCESTORASSETNUM",
            "tableName": "RECONRESULT",
            "tableColumnName": "ANCESTORASSETNUM"
        },
        {
            "attributeName": "ANCESTORSITEID",
            "required": false,
            "persistent": true,
            "title": "Top Level Site",
            "remarks": "Site ID of the ancestor asset. The ancestor is the parent that is at the root or top level of the hierarchy.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "ANCESTORSITEID",
            "tableName": "RECONRESULT",
            "tableColumnName": "ANCESTORSITEID"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset number of the IT asset.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ASSETNUM",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "ASSETVALUE",
            "required": false,
            "persistent": true,
            "title": "Asset Value",
            "remarks": "Value of the IT asset attribute.",
            "sameAsAttribute": "ASSETVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ASSETVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETVALUE"
        },
        {
            "attributeName": "DPAVALUE",
            "required": false,
            "persistent": true,
            "title": "Deployed Asset Value",
            "remarks": "Value for the deployed asset object.",
            "sameAsAttribute": "DPAVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "DPAVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAVALUE"
        },
        {
            "attributeName": "SHORTASSETVALUE",
            "required": false,
            "persistent": false,
            "title": "Asset Value",
            "remarks": "Shortened Asset Value field",
            "sameAsAttribute": "SHORTASSETVALUE",
            "sameAsObject": "RECONRESULT"
        },
        {
            "attributeName": "SHORTDPAVALUE",
            "required": false,
            "persistent": false,
            "title": "Deployed Asset Value",
            "remarks": "Shortened DPA value field",
            "sameAsAttribute": "SHORTDPAVALUE",
            "sameAsObject": "RECONRESULT"
        },
        {
            "attributeName": "RESULTTYPE",
            "required": false,
            "persistent": true,
            "title": "Result Type",
            "remarks": "Used to categorize the type of reconciliation result.",
            "sameAsAttribute": "RESULTTYPE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "RESULTTYPE",
            "tableName": "RECONRESULT",
            "tableColumnName": "RESULTTYPE"
        },
        {
            "attributeName": "RESOLVED",
            "required": true,
            "persistent": true,
            "title": "Resolved",
            "remarks": "Used to indicate the reconciliation result has been resolved.",
            "sameAsAttribute": "RESOLVED",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "RESOLVED",
            "tableName": "RECONRESULT",
            "tableColumnName": "RESOLVED"
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Used for comments while results asre being reviewed.",
            "sameAsAttribute": "COMMENTS",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "COMMENTS",
            "tableName": "RECONRESULT",
            "tableColumnName": "COMMENTS"
        },
        {
            "attributeName": "RECONTASKID",
            "required": false,
            "persistent": true,
            "title": "Task Id",
            "remarks": "Reconciliation Task ID",
            "sameAsAttribute": "RECONTASKID",
            "sameAsObject": "RECONTASK",
            "viewColumnName": "RECONTASKID",
            "tableName": "RECONRESULT",
            "tableColumnName": "RECONTASKID"
        },
        {
            "attributeName": "RECONTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Set 1",
            "remarks": "Used to categorize the type of reconciliation task being configured.",
            "sameAsAttribute": "RECONTYPE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "RECONTYPE",
            "tableName": "RECONRESULT",
            "tableColumnName": "RECONTYPE"
        },
        {
            "attributeName": "CHANGEDBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User who last changed the record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "CHANGEDBY",
            "tableName": "RECONRESULT",
            "tableColumnName": "CHANGEDBY"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Time the record was last changed.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "CHANGEDATE",
            "tableName": "RECONRESULT",
            "tableColumnName": "CHANGEDATE"
        },
        {
            "attributeName": "COMPSET",
            "required": false,
            "persistent": true,
            "title": "Data Set 2",
            "remarks": "Used to categorize set of data being compared in this reconciliation type.",
            "sameAsAttribute": "COMPSET",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "COMPSET",
            "tableName": "RECONRESULT",
            "tableColumnName": "COMPSET"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "recontype in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('ASSET')) and compset in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('DEPLOYED ASSET'))"
    },
    "outgoingRelationships": [
        {
            "name": "ANCESTORASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the reconassetresult based on the ancestorassetnum.",
            "whereClause": "assetnum=:ancestorassetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET object, used to find the ASSET record for the reconassetresult based on the assetnum.",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VDPACOLLECT",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWDPA",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWDPARELHIS",
            "target": "ASSET",
            "remarks": "Relationship to the ASSET table, used to find the ASSET record for the RECONASSETRESULT based on the assetnum. (ASSET.assetnum = RECONASSETRESULT.assetnum)",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "Relationship to the ASSETATTRIBUTE table, used to find the ASSETATTRIBUTE for the RECONRESULT. The resulting set will contain one object.",
            "whereClause": "assetattrid=:authattribute",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPLOYEDASSET",
            "target": "DEPLOYEDASSET",
            "remarks": "Relationship to the DEPLOYEDASSET object, used to find a record for the reconciresult based on node ID.",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INCIDENTASSET",
            "target": "INCIDENT",
            "remarks": "Relationship to Incident Ticket",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PROBLEMASSET",
            "target": "PROBLEM",
            "remarks": "Relationship to Problem Ticket",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "RECONMULTILINK",
            "target": "RECONMULTILINK",
            "remarks": "Relationship from reconassetresult to reconmultilink",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": null
        },
        {
            "name": "RECONTASK",
            "target": "RECONTASK",
            "remarks": "Relationship to the Recontask table, used to find the recontask record for the recon asset result based on the recontaskid.",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRASSET",
            "target": "SR",
            "remarks": "Relationship to Service Request Ticket",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the RECONASSETRESULT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGEASSET",
            "target": "WOCHANGE",
            "remarks": "Relationship to Change WO",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "WORELEASEASSET",
            "target": "WORELEASE",
            "remarks": "Relationship to Release WO",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "ALLWO",
            "target": "WORKORDER",
            "remarks": "Relationship to Work Order",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMRECONRESULT",
            "source": "COMPUTERSYSTEM",
            "remarks": "Link between COMPUTERSYSTEM and RECONRESULT",
            "whereClause": "nodeid=:nodeid and code not in ('C3', 'C4','C1','C2') and recontype in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "TLOAMRECONRESULT",
            "source": "NETDEVICE",
            "remarks": "Link between NETDEVICE and RECONRESULT",
            "whereClause": "nodeid=:nodeid and code not in ('C3', 'C4','C1','C2') and recontype in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        },
        {
            "name": "TLOAMRECONRESULT",
            "source": "NETPRINTER",
            "remarks": "Link between NETPRINTER and RECONRESULT",
            "whereClause": "nodeid=:nodeid and code not in ('C3', 'C4','C1','C2') and recontype in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'ASSET') and compset in (select maxvalue from synonymdomain where domainid = 'RECONTYPE' and maxvalue = 'DEPLOYED ASSET')",
            "cardinality": null
        }
    ]
}