mos = {
    "objectName": "LMOIMTABLE",
    "className": "psdi.iface.app.im.LmoImTableSet",
    "description": "LMOs associated with IM",
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
            "attributeName": "LMONAME",
            "required": true,
            "persistent": false,
            "title": "Logical Management Operation Name",
            "remarks": "Name of the Logical Management Operation",
            "sameAsAttribute": "LMONAME",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "LMONAMESPACE",
            "required": true,
            "persistent": false,
            "title": "Logical Management Operation Namespace",
            "remarks": "Namespace of the Logical Management Operation",
            "sameAsAttribute": "LMONAMESPACE",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Logical Management Operation Description",
            "remarks": "LMO description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Logical Management Operation Source MBO",
            "remarks": "Source MBO for LMO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RESPONSEMBO",
            "required": false,
            "persistent": false,
            "title": "Logical Management Operation Response MBO",
            "remarks": "Response MBO for LMO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "INVOCPATTERN",
            "required": false,
            "persistent": false,
            "title": "Logical Management Operation Invocation Pattern",
            "remarks": "Invocation pattern for LMO",
            "sameAsAttribute": "INVOCPATTERN",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": false,
            "title": "Integration Module Name",
            "remarks": "Integration Module Name",
            "sameAsAttribute": "IMNAME",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "IMVERSION",
            "required": true,
            "persistent": false,
            "title": "Integration Module Version",
            "remarks": "Integration Module Version",
            "sameAsAttribute": "IMVERSION",
            "sameAsObject": "MAXIM"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LMOIMNP",
            "source": "LMOIMRLN",
            "remarks": "Relationship to the non-persistent LMO/IM relationship table, used to populate the list of LMOs not already associated with an IM.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}