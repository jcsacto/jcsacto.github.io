mos = {
    "objectName": "GLUPDATEDATABASE",
    "className": "psdi.app.financial.virtual.GLUpdateDatabaseSet",
    "description": "Update database after changing Chart of Accounts.",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "UPDATEDATABASE",
            "required": false,
            "persistent": false,
            "title": "Update Database",
            "remarks": "Specifies what happens to GL account fields when you update the database with current Chart of Accounts data. Choose Overwrite Blank Accounts Only if you want the data to overwrite only those affected MAXIMO GL Account fields that are currently blank. Choose Overwrite Accounts With Old Defaults if you want the current Chart of Accounts data to overwrite GL account fields that have the previous GL account, as well as blank fields. Choose Overwrite All Accounts if you want the current Chart of Accounts data to overwrite all relevant GL Account fields in MAXIMO records. See online help for examples.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "GLUPDATEDATABASE",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}