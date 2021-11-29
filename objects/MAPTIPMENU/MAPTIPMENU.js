mos = {
    "objectName": "MAPTIPMENU",
    "className": "com.ibm.tivoli.maximo.map.mapman.app.maptips.MapTipMenuSet",
    "description": "Map Tip Menu",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAPTIPMENUID",
    "primaryKeyColumns": [
        "MAPTIPMENUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAPMANAGER",
            "targetObject": "MAPTIPMENU",
            "parentKeys": "MAPNAME",
            "targetKeys": "MAPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Map Manager",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAPTIPMENU",
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
            "attributeName": "MAPNAME",
            "required": true,
            "persistent": true,
            "title": "Map",
            "remarks": "Map",
            "sameAsAttribute": "MAPNAME",
            "sameAsObject": "MAPMANAGER"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MENUITEMNAME",
            "required": true,
            "persistent": true,
            "title": "Menu Item",
            "remarks": "The menu item that is used in the More information list on the information window. The menu item is associated with the map tip by the selected object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIALOGID",
            "required": true,
            "persistent": true,
            "title": "Dialog Identifier",
            "remarks": "The identifier of the dialog that opens when the menu item is selected from the More information list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": true,
            "title": "Signature Option",
            "remarks": "The signature option defines authorization access to view the menu item on the More information list. You can assign a Map Manager application signature option to the menu item.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": true,
            "title": "Language code",
            "remarks": "Language code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONSHIP",
            "required": false,
            "persistent": true,
            "title": "Data Source Relationship",
            "remarks": "When this field is empty the data source for the menu item action will be the current maptip record.If the relationship field is set then the data source for the menu item action will be the maximo record found based on the relationship from the current maptip record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAPTIPMENUID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship for EXPTREE.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAPTIPMENU",
            "source": "MAPTIP",
            "remarks": "Relationship to hold menu items from maptip menu to maptipobjects",
            "whereClause": "mapname=:mapname and objectname=:objectname",
            "cardinality": null
        }
    ]
}