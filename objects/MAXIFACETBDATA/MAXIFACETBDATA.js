mos = {
    "objectName": "MAXIFACETBDATA",
    "className": "psdi.iface.app.extsystem.MaxIfaceTbDataSet",
    "description": "Non-Persisten MBO for iface table UI",
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
            "attributeName": "IFACETBNAME",
            "required": false,
            "persistent": false,
            "title": "Interface Table Name",
            "remarks": "non-persistent iface table name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ITBEXISTANCE",
            "required": true,
            "persistent": false,
            "title": "Table Exists",
            "remarks": "non-persistent col for iface tb exists",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": false,
            "title": "End Point",
            "remarks": "End Point",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "BACKUPTABLE",
            "required": true,
            "persistent": false,
            "title": "Rename Existing",
            "remarks": "Specifies whether the MEA should back up data in the selected interface table, if the table exists already. When you recreate an existing interface table, the MEA deletes the existing table, then creates an empty one. If the check box is selected, the MEA first backs up the existing data. The name of the backup table is ifacename_bak, where ifacename is the name of the interface table. Backed-up data is not automatically restored to the new version of the table; a DBA must restore the data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": false,
            "title": "Ext Sys",
            "remarks": "External System Name",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "Interface",
            "remarks": "Interface Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXIFACETBDATA",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXIFACETBDATA non-persistent object, used for Int Table GUI.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ]
}