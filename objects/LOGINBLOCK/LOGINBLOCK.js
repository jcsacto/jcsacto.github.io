mos = {
    "objectName": "LOGINBLOCK",
    "className": "psdi.app.signature.LoginBlockSet",
    "description": "Clients blocked from login",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOGINBLOCKID",
    "primaryKeyColumns": [
        "LOGINBLOCKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "LOGINBLOCK",
            "parentKeys": "PERSONID",
            "targetKeys": "BLOCKBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Blocked By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "BLOCKDATE",
            "required": true,
            "persistent": true,
            "title": "Date Blocked",
            "remarks": "The date and time at which the IP address was blocked from any further login, forgot password, or self-registration attempts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BLOCKBY",
            "required": true,
            "persistent": true,
            "title": "Blocked By",
            "remarks": "User who created this block",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CLIENTHOST",
            "required": false,
            "persistent": true,
            "title": "Client Host",
            "remarks": "The name of the computer that was blocked from any further login, forgot password, or self-registration attempts.",
            "sameAsAttribute": "CLIENTHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "CLIENTADDR",
            "required": false,
            "persistent": true,
            "title": "Client Address",
            "remarks": "The IP address of the computer that was blocked from any further login, forgot password, or self-registration attempts.",
            "sameAsAttribute": "CLIENTHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "REASON",
            "required": false,
            "persistent": true,
            "title": "Reason",
            "remarks": "The explanation for blocking the IP address from any further login, forgot password, or self-registration attempts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGINBLOCKID",
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