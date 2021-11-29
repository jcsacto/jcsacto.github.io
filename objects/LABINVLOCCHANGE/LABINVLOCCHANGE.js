mos = {
    "objectName": "LABINVLOCCHANGE",
    "className": "psdi.app.labor.virtual.LabInvLocSet",
    "description": "Non persistent table for changing the LabInvLoc",
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Non persistent site id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": false,
            "title": "Location",
            "remarks": "Non persistent location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Non Persistent Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": false,
            "title": "Control Account",
            "remarks": "Non Persistent Control account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": false,
            "title": "Shrinkage Account",
            "remarks": "Non Persistent Shrinkage Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": false,
            "title": "GL Account",
            "remarks": "Non Persistent GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the labor table.  For access to the entire set.  (No whereclause.)  Returns 0 or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABINVLOCCHANGE",
            "source": "LABOR",
            "remarks": "Relationship to the non-persistent LABINVLOCCHANGE table.  For access to the non-persistent table only.  (No whereclause.)  Returns 0 objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}