mos = {
    "objectName": "USERSTATUSCHANGE",
    "className": "psdi.app.signature.virtual.UserStatusChangeSet",
    "description": "User Status Change",
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
            "attributeName": "USERCOUNT",
            "required": true,
            "persistent": false,
            "title": "Records Being Updated",
            "remarks": "Number of users to be affected by this status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Status to which you want to change the user. ACTIVE or INACTIVE. Click the dropdown button to select the noncurrent status.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Enter additional information regarding the status change, as appropriate.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Read-only field for date and time the status change occurs.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "MAXUSERSTATUS"
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": false,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "The name of the person being displayed on the screen",
            "sameAsAttribute": "DISPLAYNAME",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CURRENTSTATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "User's current status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MAXUSER"
        },
        {
            "attributeName": "CURRENTSTATUSDESC",
            "required": false,
            "persistent": false,
            "title": "Current Status Description",
            "remarks": "Description of user's current status",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SYNONYMDOMAIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "USERSTATUSCHANGE",
            "source": "MAXUSER",
            "remarks": "MaxUser to UserStatusChange",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}