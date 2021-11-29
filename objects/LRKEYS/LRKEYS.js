mos = {
    "objectName": "LRKEYS",
    "className": "x",
    "description": "Keys for Logical Relationships",
    "longDescription": "The KeyNum column is only an identifier, and the order of the keys does not matter. WONUM+SITEID is the same as SITED+WONUM. KeyNums are numbered starting from 1.",
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LRKEYSID",
    "primaryKeyColumns": [
        "LOGICALRELATIONSHIPID",
        "KEYNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LOGICALRELATIONSHIP",
            "targetObject": "LRKEYS",
            "parentKeys": "LOGICALRELATIONSHIPID",
            "targetKeys": "LOGICALRELATIONSHIPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Keys making up the relationship.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LOGICALRELATIONSHIPID",
            "required": true,
            "persistent": true,
            "title": "LogRel Unique ID",
            "remarks": "Unique ID of owning LogicalRelationship",
            "sameAsAttribute": "LOGICALRELATIONSHIPID",
            "sameAsObject": "LOGICALRELATIONSHIP"
        },
        {
            "attributeName": "KEYNUM",
            "required": true,
            "persistent": true,
            "title": "Key #",
            "remarks": "Key pair #. This should not be taken as a sequence number, it is just an identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTKEY",
            "required": true,
            "persistent": true,
            "title": "Parent Key",
            "remarks": "Name of key from the parent for this pair.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TARGETKEY",
            "required": false,
            "persistent": true,
            "title": "Target Key",
            "remarks": "Name of key from the target for this pair.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LITERALKEY",
            "required": false,
            "persistent": true,
            "title": "Literal Key",
            "remarks": "Literal value the parent key should have.",
            "sameAsAttribute": "VIEWWHERE",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "LRKEYSID",
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