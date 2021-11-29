mos = {
    "objectName": "DMSAPISETTING",
    "className": "psdi.app.doclink.DmsApiSettingSet",
    "description": "Document Management System and Interface Settings",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMSAPISETTINGID",
    "primaryKeyColumns": [
        "DMSNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMSAPISETTING",
            "targetObject": "DOCINFO",
            "parentKeys": "DMSNAME",
            "targetKeys": "DMSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "API Settings",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DMSNAME",
            "required": true,
            "persistent": true,
            "title": "DMS",
            "remarks": "Unique name of the DMS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEPARAMETER1",
            "required": true,
            "persistent": true,
            "title": "Use Parameter 1 ",
            "remarks": "Flag to determine whether this parameter will be used in building the key to the document in the DMS database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEPARAMETER2",
            "required": true,
            "persistent": true,
            "title": "Use Parameter 2 ",
            "remarks": "Flag to determine whether this parameter will be used in building the key to the document in the DMS database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEPARAMETER3",
            "required": true,
            "persistent": true,
            "title": "Use Parameter 3 ",
            "remarks": "Flag to determine whether this parameter will be used in building the key to the document in the DMS database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEPARAMETER4",
            "required": true,
            "persistent": true,
            "title": "Use Parameter 4 ",
            "remarks": "Flag to determine whether this parameter will be used in building the key to the document in the DMS database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEPARAMETER5",
            "required": true,
            "persistent": true,
            "title": "Use Parameter 5 ",
            "remarks": "Flag to determine whether this parameter will be used in building the key to the document in the DMS database",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class",
            "remarks": "Java class name for DMSManager for this DMS",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DMSAPISETTINGID",
            "required": true,
            "persistent": true,
            "title": "DMSAPISETTINGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCINFO",
            "target": "DOCINFO",
            "remarks": "Relationship to Docinfo table. (docinfo.dmsname = dmsapisetting.dmsname). The result set will contain zero or more objects.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMSAPISETTING",
            "source": "DOCINFO",
            "remarks": "Relationship to DmsApiSetting table. (dmsapisetting.dmsname = docinfo.dmsname). If dmsname is not null, the result set will contain one object.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMSAPISETTING",
            "source": "DOCLINKS",
            "remarks": "Relationship to DmsApiSetting table. via non-persistent attribute (dmsapisetting.dmsname = doclinks.dmsname). The result set will contain one object.",
            "whereClause": "dmsname = :dmsname",
            "cardinality": "UNDEFINED"
        }
    ]
}