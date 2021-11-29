mos = {
    "objectName": "MAXUSERAPPLOG",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Shows the applications user used",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXUSERAPPLOGID",
    "primaryKeyColumns": [
        "MAXUSERAPPLOGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXUSERAPPLOG",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "UISESSIONID",
            "required": false,
            "persistent": true,
            "title": "UISession ID",
            "remarks": "UISession ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User ID",
            "remarks": "User ID",
            "sameAsAttribute": "LOGINID",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "ENTERDATETIME",
            "required": false,
            "persistent": true,
            "title": "Enter Datetime",
            "remarks": "Enter Datetime",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXUSERAPPLOGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}