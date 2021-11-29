mos = {
    "objectName": "EDITERRORDATA",
    "className": "psdi.dm.virtual.EditErrorDataSet",
    "description": "Dialog set for editing DMErrorData",
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
            "attributeName": "ERRORDATA",
            "required": false,
            "persistent": false,
            "title": "Editable Error Data",
            "remarks": "The XML that contains the record that caused the deployment data error. You can edit the XML in this field to try to resolve the data error and then resume deployment of the package.",
            "sameAsAttribute": "ERRORDATA",
            "sameAsObject": "DMERROR"
        },
        {
            "attributeName": "ORIGERRORDATA",
            "required": false,
            "persistent": false,
            "title": "Original Error Data",
            "remarks": "The XML that contains the record that caused the deployment data error. If you edit the error data, the edits are not shown in this field.",
            "sameAsAttribute": "ORIGERRORDATA",
            "sameAsObject": "DMERROR"
        },
        {
            "attributeName": "CFGOBJGROUP",
            "required": false,
            "persistent": false,
            "title": "Migration Group",
            "remarks": "The migration group that contains the migration object that caused the deployment data error.",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "CFGOBJECT",
            "required": false,
            "persistent": false,
            "title": "Migration Object",
            "remarks": "The migration object that caused the deployment data error.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "KEYS",
            "required": false,
            "persistent": false,
            "title": "Keys",
            "remarks": "The keys that uniquely identify the record in the XML that caused the deployment data error.",
            "sameAsAttribute": "KEYS",
            "sameAsObject": "DMERROR"
        },
        {
            "attributeName": "ERRORDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "The date and time when the deployment data error occurred.",
            "sameAsAttribute": "ERRORDATE",
            "sameAsObject": "DMERROR"
        },
        {
            "attributeName": "MSG",
            "required": false,
            "persistent": false,
            "title": "Message",
            "remarks": "The error message that was triggered by the deployment data error. The message contains a unique identifier and a description of the error.",
            "sameAsAttribute": "MSG",
            "sameAsObject": "DMMESSAGE"
        },
        {
            "attributeName": "MSGDETAILS",
            "required": false,
            "persistent": false,
            "title": "Message Details",
            "remarks": "The stack trace for the error.",
            "sameAsAttribute": "MSGDETAILS",
            "sameAsObject": "DMMESSAGE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "EDITERRORDATA",
            "source": "DMPACKAGE",
            "remarks": "Relation to the set for editing the error data.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}