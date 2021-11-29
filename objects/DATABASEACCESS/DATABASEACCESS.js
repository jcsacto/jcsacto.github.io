mos = {
    "objectName": "DATABASEACCESS",
    "className": "psdi.app.signature.virtual.DatabaseAccessSet",
    "description": "Native database access to tables and views",
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Name of the Maximo object. Click the Detail Menu button to select an object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ENTITYNAME",
            "required": true,
            "persistent": false,
            "title": "Entity Name",
            "remarks": "Name of the table or view.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ISVIEW",
            "required": true,
            "persistent": false,
            "title": "Is View",
            "remarks": "Identifies whether this is a view; True = view, False = table",
            "sameAsAttribute": "ISVIEW",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "READ",
            "required": true,
            "persistent": false,
            "title": "Read",
            "remarks": "Specifies whether the user can view the data in the table or view. If the check box is selected, the user can view the data. If the check box is cleared the user cannot view the data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSERT",
            "required": true,
            "persistent": false,
            "title": "Insert",
            "remarks": "Specifies whether the user can insert data in the table or view. If the check box is selected, the user can insert data. If the check box is cleared the user cannot insert data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATE",
            "required": true,
            "persistent": false,
            "title": "Update",
            "remarks": "Specifies whether the user can update data in the table or view. If the check box is selected, the user can update data. If the check box is cleared the user cannot update data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETE",
            "required": true,
            "persistent": false,
            "title": "Delete",
            "remarks": "Specifies whether the user can delete data from the table or view. If the check box is selected, the user can delete data. If the check box is cleared the user cannot delete data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DATABASEACCESS",
            "source": "DATABASEACCESSID",
            "remarks": "DatabaseAccessID to DatabaseAccess",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}