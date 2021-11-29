mos = {
    "objectName": "DPAUSERINFO",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Users",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "PERSONID",
        "NODEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPAUSERINFO",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed User Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "PERSONNELNUMBER",
            "required": false,
            "persistent": true,
            "title": "Personnel Number",
            "remarks": "Personnel number of the computer user. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTNAME",
            "required": false,
            "persistent": true,
            "title": "Last Name",
            "remarks": "User's last name. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIRSTNAME",
            "required": false,
            "persistent": true,
            "title": "First Name",
            "remarks": "User's first name. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JOBTITLE",
            "required": false,
            "persistent": true,
            "title": "Job Title",
            "remarks": "User's job title. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPARTMENT",
            "required": false,
            "persistent": true,
            "title": "Department",
            "remarks": "User's department. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKPHONE",
            "required": false,
            "persistent": true,
            "title": "Work Phone",
            "remarks": "User's work phone number. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKEMAIL",
            "required": false,
            "persistent": true,
            "title": "Work E-mail",
            "remarks": "User's email address at work. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUILDING",
            "required": false,
            "persistent": true,
            "title": "Building",
            "remarks": "Building where the user works. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLOOR",
            "required": false,
            "persistent": true,
            "title": "Floor",
            "remarks": "Floor where the user works. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROOM",
            "required": false,
            "persistent": true,
            "title": "Room",
            "remarks": "Room",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "GL account to which the user is assigned. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETTAG",
            "required": false,
            "persistent": true,
            "title": "Computer Asset Tag",
            "remarks": "Asset tag on the computer, as entered manually by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Person Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FACILITY",
            "required": false,
            "persistent": true,
            "title": "Facility",
            "remarks": "Facility where the user works. This data is manually entered on the deployed computer by the user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPAUSERINFO",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAUSERINFO",
            "source": "DPACOMPUTER",
            "remarks": null,
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        }
    ]
}