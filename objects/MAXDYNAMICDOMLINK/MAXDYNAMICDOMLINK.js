mos = {
    "objectName": "MAXDYNAMICDOMLINK",
    "className": "psdi.app.configure.MaxDynamicDomLinkSet",
    "description": "The domain links that can be specified by where clauses",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXDYNAMICDOMLINKID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "ATTRIBUTENAME",
        "DOMAINWHERE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXDYNAMICDOMLINK",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDYNAMICDOMLINK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Name of the object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Name of the attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DOMAINWHERE",
            "required": true,
            "persistent": true,
            "title": "Domain Where Clause",
            "remarks": "The where clause that is applied to MAXDOMAIN to get a list of domains that link to the specified attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEWHERE",
            "required": false,
            "persistent": true,
            "title": "Update Where Clause",
            "remarks": "The where clause that is appended to the update statement when the column of the table is updated to load the translated data of a domain",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "MAXDYNAMICDOMLINKID",
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