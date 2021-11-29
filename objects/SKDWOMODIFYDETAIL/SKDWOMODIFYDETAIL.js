mos = {
    "objectName": "SKDWOMODIFYDETAIL",
    "className": "com.ibm.tivoli.maximo.skd.app.virtual.SKDWOModifyDetailSet",
    "description": "Non-persistent object used to update work order records.",
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
            "attributeName": "CREWID",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Identification for a crew within a craft. A crew is made up of labor records.",
            "sameAsAttribute": "CREWID",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "LEAD",
            "required": false,
            "persistent": false,
            "title": "Lead",
            "remarks": "Lead person responsible for the work.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TARGCOMPDATE",
            "required": false,
            "persistent": false,
            "title": "Target Finish",
            "remarks": "Date the work order is targeted to be completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGSTARTDATE",
            "required": false,
            "persistent": false,
            "title": "Target Start",
            "remarks": "Date the work order is targeted to begin. If the work order is generated from a PM, the date is supplied by the PM work order generation process.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": false,
            "title": "Supervisor",
            "remarks": "Supervisor of the work.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": false,
            "title": "Work Group",
            "remarks": "Identifies the person group that is responsible.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "WOPRIORITY",
            "required": false,
            "persistent": false,
            "title": "Priority",
            "remarks": "Identifies the importance of the work order, from 0-999, where 0 is the lowest priority and 999 is the highest.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Defines the Crew who will be copied to the work order created with this job plan.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
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
            "attributeName": "CREWIDYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEADYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGCOMPDATEYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGSTARTDATEYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPERVISORYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUPYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOPRIORITYYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEIDYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGIDYORN",
            "required": false,
            "persistent": false,
            "title": "Clear",
            "remarks": "Clear Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "WORKORDERPERSONGROUP",
            "target": "PERSONGROUP",
            "remarks": "Relationship to persongroup to return the workorders persongroup",
            "whereClause": "persongroup = :persongroup",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}