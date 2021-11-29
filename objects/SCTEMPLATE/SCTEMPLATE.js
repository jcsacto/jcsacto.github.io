mos = {
    "objectName": "SCTEMPLATE",
    "className": "psdi.app.scconfig.StartCenterTemplateSet",
    "description": "Start Center Template",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SCTEMPLATEID",
    "primaryKeyColumns": [
        "SCTEMPLATEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "SCTEMPLATE",
            "targetObject": "MAXGROUP",
            "parentKeys": "SCTEMPLATEID",
            "targetKeys": "SCTEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Center Template",
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
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SCTEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A clear description of the template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRESENTATION",
            "required": false,
            "persistent": true,
            "title": "Presentation",
            "remarks": "Presentation XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDON",
            "required": false,
            "persistent": true,
            "title": "Created On",
            "remarks": "The date the template was created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Start Center Template",
            "remarks": "The name of the template.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTENTUID",
            "required": true,
            "persistent": true,
            "title": "CONTENTUID",
            "remarks": "Content Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TEMPLATE_GROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find which group is using this template. The resulting set will contain zero or more objects.",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SCCONFIG",
            "target": "SCCONFIG",
            "remarks": "Relationship to the SCCONFIG table, used to find a SCCONFIG that are using this template (sctemplate.sctemplateid=scconfig.sctemplateid) The resulting set will contain zero or more objects.",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SCTEMPLATE",
            "source": "MAXGROUP",
            "remarks": "MaxGroup to SCTemplate",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        }
    ]
}