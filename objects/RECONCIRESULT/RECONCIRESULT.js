mos = {
    "objectName": "RECONCIRESULT",
    "className": "psdi.app.rcnresult.ci.ReconCIResultSet",
    "description": "CI Result of Link and/or Comparison",
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
            "objectName": "ACTCI",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ANCESTORCINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ACTCIOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "AUTHOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
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
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCIRESULT",
            "parentKeys": "SITEID",
            "targetKeys": "ANCESTORSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "RECONCIRESULT",
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
            "title": "Reconciliation Result ID",
            "remarks": "Unique Identifier for the specific result",
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
            "title": "Rule Name",
            "remarks": "Name of the rule processed.",
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
            "attributeName": "ACTCIID",
            "required": false,
            "persistent": true,
            "title": "Actual CI",
            "remarks": "Unique Identifier for the Actual CI.",
            "sameAsAttribute": "ACTCIID",
            "sameAsObject": "ACTCI",
            "viewColumnName": "ACTCIID",
            "tableName": "RECONRESULT",
            "tableColumnName": "NODEID"
        },
        {
            "attributeName": "AUTHOBJECT",
            "required": false,
            "persistent": true,
            "title": "CI Object",
            "remarks": "CI object that was reconciled.",
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
            "title": "CI Attribute",
            "remarks": "Attribute of the CI object that was reconciled.",
            "sameAsAttribute": "AUTHATTRIBUTE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "AUTHATTRIBUTE",
            "tableName": "RECONRESULT",
            "tableColumnName": "AUTHATTRIBUTE"
        },
        {
            "attributeName": "AUTHMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "CI Unit of Measure",
            "remarks": "CI Measure Unit Id",
            "sameAsAttribute": "ASSETMEASUREUNITID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "AUTHMEASUREUNITID",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETMEASUREUNITID"
        },
        {
            "attributeName": "AUTHDATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "CI Date Time Value",
            "remarks": "CI Date Time Value",
            "sameAsAttribute": "ASSETDATETIMEVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "AUTHDATETIMEVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETDATETIMEVALUE"
        },
        {
            "attributeName": "ACTCIOBJECT",
            "required": false,
            "persistent": true,
            "title": "Actual CI Object",
            "remarks": "Actual CI Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "ACTCIOBJECT",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAOBJECT"
        },
        {
            "attributeName": "ACTCIKEYFIELD",
            "required": false,
            "persistent": true,
            "title": "Actual CI Key Field",
            "remarks": "Actual CI Key Field",
            "sameAsAttribute": "DPAKEYFIELD",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIKEYFIELD",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAKEYFIELD"
        },
        {
            "attributeName": "ACTCIKEYVALUE",
            "required": false,
            "persistent": true,
            "title": "Actual CI Key Value",
            "remarks": "Actual CI Key Value",
            "sameAsAttribute": "DPAKEYVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIKEYVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAKEYVALUE"
        },
        {
            "attributeName": "ACTCIATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Actual CI Attribute",
            "remarks": "Actual CI Attribute",
            "sameAsAttribute": "DPAATTRIBUTE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIATTRIBUTE",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAATTRIBUTE"
        },
        {
            "attributeName": "ACTCIMEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Actual CI Unit of Measure",
            "remarks": "Actual CI Measure Unit Id",
            "sameAsAttribute": "DPAMEASUREUNITID",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIMEASUREUNITID",
            "tableName": "RECONRESULT",
            "tableColumnName": "DPAMEASUREUNITID"
        },
        {
            "attributeName": "ACTCIDATETIMEVALUE",
            "required": false,
            "persistent": true,
            "title": "Actual CI Date Time Value",
            "remarks": "Actual CI Date Time Value",
            "sameAsAttribute": "DPADATETIMEVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIDATETIMEVALUE",
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
            "attributeName": "ANCESTORCINUM",
            "required": false,
            "persistent": true,
            "title": "Top Level CI",
            "remarks": "Top Level CI for the child CI in the result.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI",
            "viewColumnName": "ANCESTORCINUM",
            "tableName": "RECONRESULT",
            "tableColumnName": "ANCESTORASSETNUM"
        },
        {
            "attributeName": "ANCESTORSITEID",
            "required": false,
            "persistent": true,
            "title": "Top Level Site",
            "remarks": "Site ID of the Top Level CI for the child CI in the result.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "ANCESTORSITEID",
            "tableName": "RECONRESULT",
            "tableColumnName": "ANCESTORSITEID"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": true,
            "title": "CI",
            "remarks": "Unique identifier for a CI.",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI",
            "viewColumnName": "CINUM",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "CIVALUE",
            "required": false,
            "persistent": true,
            "title": "CI Value",
            "remarks": "The value of the CI in the result.",
            "sameAsAttribute": "ASSETVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "CIVALUE",
            "tableName": "RECONRESULT",
            "tableColumnName": "ASSETVALUE"
        },
        {
            "attributeName": "ACTCIVALUE",
            "required": false,
            "persistent": true,
            "title": "Actual CI Value",
            "remarks": "The value of the actual CI in the result.",
            "sameAsAttribute": "DPAVALUE",
            "sameAsObject": "RECONRESULT",
            "viewColumnName": "ACTCIVALUE",
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
            "remarks": "Determines if the result was produced by a link or comparison rule.",
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
            "remarks": "Used for manual processing of results records during remediation process.",
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
            "remarks": "Used for comments while results are being reviewed.",
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
            "title": "Reconciliation Task ID",
            "remarks": "The unique identified of the reconciliation task which processed this result.",
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
            "title": "Reconciliation Type",
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
            "title": "Comparison Set",
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
        "viewwhere": "recontype in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('CI')) and compset in (select value from synonymdomain where domainid ='RECONTYPE' and maxvalue in ('ACTUAL CI'))"
    },
    "outgoingRelationships": [
        {
            "name": "ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconciresult based on the actciid.",
            "whereClause": "actciid=:actciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCIRESULT_ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ACTCI table, used to find the ACTCI record for the reconciresult based on the actcikeyvalue",
            "whereClause": "actciid=:actcikeyvalue",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the ancestorcinum.",
            "whereClause": "cinum=:ancestorcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASK",
            "target": "RECONTASK",
            "remarks": "Relationship to the Recontask table, used to find the recontask record for the reconciresult based on the recontaskid.",
            "whereClause": "recontaskid=:recontaskid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the RECONCIRESULT to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}