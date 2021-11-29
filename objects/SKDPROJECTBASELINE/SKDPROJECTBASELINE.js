mos = {
    "objectName": "SKDPROJECTBASELINE",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDProjectBaseLineSet",
    "description": "Non-persistant SKDPROJECTBASELINEChange Status Table",
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
            "attributeName": "BASELINENAME",
            "required": true,
            "persistent": false,
            "title": "Snapshot",
            "remarks": "Name of the snapshot.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Snapshot description.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELINEMEMO",
            "required": false,
            "persistent": false,
            "title": "Publish Memo",
            "remarks": "Memo for publish.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Identifies the resource leveling template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTOBJID",
            "required": false,
            "persistent": false,
            "title": "Input parameter object id",
            "remarks": "Indicates the objectid of the input parameter of the ODM application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDPROJECTBASELINE",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the non-persistent SKDPROJECTBASELINE table. (There is no where clause for non-persistent objects). The resulting set will contain zero or more objects.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}