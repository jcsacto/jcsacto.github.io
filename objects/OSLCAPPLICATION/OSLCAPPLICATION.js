mos = {
    "objectName": "OSLCAPPLICATION",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcApplicationSet",
    "description": "OSLC Application",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MENUID",
            "required": false,
            "persistent": false,
            "title": "Menu ID",
            "remarks": "The field-level Detail Menu ID that is modified in the consumer application to support the execution of a query for an interaction group.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ATTRIBUTEID",
            "required": false,
            "persistent": false,
            "title": "Attribute ID",
            "remarks": "The attribute ID in the consumer application for the field-level Detail Menu item that is modified.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "The attribute name in the consumer application for the field-level Detail Menu item that is modified.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MENUITEMID",
            "required": false,
            "persistent": false,
            "title": "Menu Item ID",
            "remarks": "Menu Item ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": false,
            "title": "Menu Item Label",
            "remarks": "Menu Item Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABEL_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Menu Item Label Long description",
            "remarks": "Long Description for Menu Item Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MENUITEM",
            "target": "OSLCAPPLICATION",
            "remarks": "Display all menu items for a Menu",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MENUITEM",
            "source": "OSLCAPPLICATION",
            "remarks": "Display all menu items for a Menu",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "ALLMENUTYPE",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Display all menu types for an Applications",
            "whereClause": "",
            "cardinality": null
        }
    ]
}