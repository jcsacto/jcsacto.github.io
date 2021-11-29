mos = {
    "objectName": "SCCONFIG",
    "className": "psdi.app.scconfig.SCConfigSet",
    "description": "Start Center Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SCCONFIGID",
    "primaryKeyColumns": [
        "USERID",
        "GROUPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SCCONFIG",
            "targetObject": "LAYOUT",
            "parentKeys": "SCCONFIGID",
            "targetKeys": "SCCONFIGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Layout of the Portlets in a Start Center",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "SCCONFIG",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Ownership for Start Center",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "SCCONFIG",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Center Configuration",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SCCONFIG",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 335",
            "longDescription": null
        },
        {
            "objectName": "SCTEMPLATE",
            "targetObject": "SCCONFIG",
            "parentKeys": "SCTEMPLATEID",
            "targetKeys": "SCTEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the StartCenter templates to the Start Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LAYOUT",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "Select the layout type. Your choices are Wide-Narrow and Narrow-Wide.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Default",
            "remarks": "Check this box to make this Start Center the default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCCONFIGID",
            "required": true,
            "persistent": true,
            "title": "SCCONFIGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "This is a clear description of the Start Center. If you have more than one Start Center, this text appears in this Start Center's tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User Id",
            "remarks": "User Id",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Group Name",
            "remarks": "Group Name",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "SCTEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Template Quique Id",
            "remarks": "What template is this based on",
            "sameAsAttribute": "SCTEMPLATEID",
            "sameAsObject": "SCTEMPLATE"
        },
        {
            "attributeName": "DISPLAY",
            "required": true,
            "persistent": true,
            "title": "Display",
            "remarks": "Check this box to display this Start Center when you have multiple Start Center tabs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "Content Unique Id",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISMOBILE",
            "required": false,
            "persistent": true,
            "title": "Is Mobile",
            "remarks": "Is Mobile flag for Start Centers",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LAYOUTALL",
            "target": "LAYOUT",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration in a start center",
            "whereClause": "scconfigid = :scconfigid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LAYOUTLEFT",
            "target": "LAYOUT",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration on right column  in a start center",
            "whereClause": "scconfigid = :scconfigid and columnnum = 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LAYOUTRIGHT",
            "target": "LAYOUT",
            "remarks": "Relationship between SCCONFIG Object and Layout. Used to return portlets configuration on left column  in a start center",
            "whereClause": "scconfigid = :scconfigid and columnnum = 1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCGRPTEMPLATE",
            "target": "MAXGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find a template associated withe this start center",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SCCONFIG",
            "source": "MAXUSER",
            "remarks": "Start Center Configuration for a user.  Will contain zero or more records.",
            "whereClause": "userid = :userid",
            "cardinality": null
        },
        {
            "name": "SCCONFIG",
            "source": "SCTEMPLATE",
            "remarks": "Relationship to the SCCONFIG table, used to find a SCCONFIG that are using this template (sctemplate.sctemplateid=scconfig.sctemplateid) The resulting set will contain zero or more objects.",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        }
    ]
}