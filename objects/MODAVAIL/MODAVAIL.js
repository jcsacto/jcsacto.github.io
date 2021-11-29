mos = {
    "objectName": "MODAVAIL",
    "className": "psdi.app.person.ModAvailSet",
    "description": "Work periods where a person's availability differs from their work Calendar",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MODAVAILID",
    "primaryKeyColumns": [
        "MODAVAILID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MODAVAIL",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": true,
            "title": "Start Time",
            "remarks": "Shift Start Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDTIME",
            "required": false,
            "persistent": true,
            "title": "End Time",
            "remarks": "Shift End Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKHOURS",
            "required": false,
            "persistent": true,
            "title": "Hours",
            "remarks": "True Person Availability For This Work Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REASONCODE",
            "required": false,
            "persistent": true,
            "title": "Reason Code",
            "remarks": "Reason to change availability",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODAVAILID",
            "required": true,
            "persistent": true,
            "title": "UniqueId",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKDATE",
            "required": false,
            "persistent": true,
            "title": "Work Date",
            "remarks": "Date of the person availability",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAY",
            "required": false,
            "persistent": false,
            "title": "Day",
            "remarks": "Day of the week",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "REASONCODE",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship from modavail to reasoncode.",
            "whereClause": " domainid='RSNCODE' and value=:reasoncode",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MODAVAILNONWORK",
            "source": "AMCREWLABOR",
            "remarks": "Finds the non-working entries for a particular person",
            "whereClause": "personid in (select personid from labor where laborcode = :laborcode and orgid = :orgid) and reasoncode in ( select value from synonymdomain where domainid='RSNCODE' and maxvalue='NON-WORK')",
            "cardinality": null
        },
        {
            "name": "MODAVAIL",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship from LaborCraftRate to ModAvail",
            "whereClause": "personid = (select personid from labor where laborcode = :laborcode and orgid = :orgid)",
            "cardinality": null
        },
        {
            "name": "MODAVAIL",
            "source": "PERSON",
            "remarks": "Relationship from person to modavail.",
            "whereClause": "personid = :personid",
            "cardinality": null
        }
    ]
}