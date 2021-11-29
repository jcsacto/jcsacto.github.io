mos = {
    "objectName": "SKDGVPREF",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Gantt Viewer Preferences",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDGVPREFID",
    "primaryKeyColumns": [
        "PROJECTNAME",
        "USERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "SKDGVPREF",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SKDPROJECT",
            "targetObject": "SKDGVPREF",
            "parentKeys": "NAME",
            "targetKeys": "PROJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Gantt Viewer Preferences",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Project Name",
            "remarks": "Name of the Project",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User Id",
            "remarks": "User Id",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HSPLITDIVLOC",
            "required": false,
            "persistent": true,
            "title": "Horizontal Split Divider Location",
            "remarks": "Horizontal Split Divider Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VSPLITDIVLOC",
            "required": false,
            "persistent": true,
            "title": "Vertical Split Divider Location",
            "remarks": "Vertical Split Divider Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VISIBLESTART",
            "required": true,
            "persistent": true,
            "title": "Visible Start Time",
            "remarks": "Visible Start Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VISIBLEINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Visible Interval",
            "remarks": "Visible Interval",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELACTIVITIES",
            "required": false,
            "persistent": true,
            "title": "Selected Activities",
            "remarks": "Selected Activities",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELRESOURCES",
            "required": false,
            "persistent": true,
            "title": "Selected Resources",
            "remarks": "Selected Resources",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDGVPREFID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPERTYDATA",
            "required": false,
            "persistent": true,
            "title": "Property Data",
            "remarks": "Custom Preference Property Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VSCROLLPOS",
            "required": false,
            "persistent": true,
            "title": "Vertical Scroll Bar Position",
            "remarks": "Vertical Scroll Bar Position",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDGVPREF",
            "source": "SKDPROJECT",
            "remarks": "Gantt View preferences",
            "whereClause": "projectname=:name",
            "cardinality": null
        }
    ]
}