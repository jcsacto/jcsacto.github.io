mos = {
    "objectName": "LDAPSYNCPARAMS",
    "className": "psdi.security.ldap.LdapSyncParamsSet",
    "description": "LDAP Synchronization parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LDAPSYNCPARAMSID",
    "primaryKeyColumns": [
        "TASKNAME",
        "TASKINSTANCE",
        "PARAMNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "LDAPSYNCPARAMS",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "TASKINSTANCE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "LDAPSYNCPARAMS",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "TASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PARAMNAME",
            "required": true,
            "persistent": true,
            "title": "Parameter",
            "remarks": "Parameter name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARAMVALUE",
            "required": false,
            "persistent": true,
            "title": "Parameter Value",
            "remarks": "Parameter value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDAPSYNCPARAMSID",
            "required": true,
            "persistent": true,
            "title": "LDAPSYNCPARAMSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKNAME",
            "required": false,
            "persistent": true,
            "title": "Task Name",
            "remarks": "Task Name",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "TASKINSTANCE",
            "required": false,
            "persistent": true,
            "title": "Task Instance",
            "remarks": "Task Instance",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}