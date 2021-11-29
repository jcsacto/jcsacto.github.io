mos = {
    "objectName": "PERSONGROUPTEAM",
    "className": "psdi.app.persongroup.PersonGroupTeamSet",
    "description": "persongroups team table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PERSONGROUPTEAMID",
    "primaryKeyColumns": [
        "PERSONGROUP",
        "RESPPARTYGROUP",
        "RESPPARTY",
        "USEFORORG",
        "USEFORSITE"
    ],
    "logicalRelationships": [
        {
            "objectName": "PERSONGROUPTEAM",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "PERSONGROUPTEAMID",
            "targetKeys": "PERSONGROUPTEAMID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group Team",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "ORGID",
            "targetKeys": "USEFORORG",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONID",
            "targetKeys": "RESPPARTYGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Responsible Party Group",
            "longDescription": null
        },
        {
            "objectName": "PERSONGROUP",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "PERSONGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person Group",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PERSONGROUPTEAM",
            "parentKeys": "SITEID",
            "targetKeys": "USEFORSITE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RESPPARTYGROUP",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the primary member of this person group.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "RESPPARTY",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the alternate person for a primary member in this person group for Worklfow assignments and notifications.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "RESPPARTYGROUPSEQ",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "A numerical value that indicates to Workflow the assignment sequence for this person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPPARTYSEQ",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "A numerical value that indicates to Workflow the assignment sequence for this alternate person.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEFORORG",
            "required": false,
            "persistent": true,
            "title": "Use for Organization",
            "remarks": "The organization that this person is to be used for. If a value is entered in this field, the Use for Site field becomes read-only.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "USEFORSITE",
            "required": false,
            "persistent": true,
            "title": "Use for Site",
            "remarks": "The site that this person is to be used for. If a value is entered in this field, the Use for Organization field becomes read-only.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "GROUPDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Group Default",
            "remarks": "Indicates that this person is the default person for this group. The first person entered in a group automatically becomes the group default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Organization Default",
            "remarks": "Indicates that this person is the default person for an organization. Only one person in each organization can be designated as the default in that organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Site Default",
            "remarks": "Indicates that this person is the default person for a site. Only one person in each site can be designated as the default in that site.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUPTEAMID",
            "required": true,
            "persistent": true,
            "title": "PERSONGROUPTEAMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERSONGROUP",
            "required": false,
            "persistent": true,
            "title": "Person Group",
            "remarks": "REPLACES PERSONGROUPID",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": false,
            "title": "Calendar",
            "remarks": "The calendar record associated with this person.",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "The shift record associated with this person.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSONGROUPTEAM_CALENDAR",
            "target": "CALENDAR",
            "remarks": "Temp relationship to get a calendar for a persongroupteam member",
            "whereClause": "calnum in (select calnum from personcal where personid=:respparty)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_LABOR",
            "target": "LABOR",
            "remarks": "Return the labor for a persongroupteam resppartygroup member",
            "whereClause": "laborcode=:resppartygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_LABORALTERNATE",
            "target": "LABOR",
            "remarks": "Return the labor for a persongroupteam resppart (alternates) member",
            "whereClause": "laborcode=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESPPARTY_PERSONS",
            "target": "PERSON",
            "remarks": "Allow persongroupteam to retrieve persons related by respparty",
            "whereClause": "personid=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESPPARTYGROUP_PERSONS",
            "target": "PERSON",
            "remarks": "Allow persongroupteam to retrieve persons related by resppartygroup",
            "whereClause": "personid=:resppartygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPTEAM_PERSONCAL",
            "target": "PERSONCAL",
            "remarks": "Relationship to allow retrieval of personcal info using persongroupteam",
            "whereClause": "personid=:respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYMEMBER_ALTERNATES",
            "target": "PERSONGROUPTEAM",
            "remarks": "Allow persongroupteam to retrieve alternates",
            "whereClause": "persongroup=:persongroup and resppartygroup=:resppartygroup and resppartygroup!=respparty",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PERSONGROUP_PRIMARYMEMBERS",
            "source": "PERSONGROUP",
            "remarks": "Allow persongroup to retrieve primary members in person group team",
            "whereClause": "persongroup=:persongroup and resppartygroup=respparty",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONGROUPS_DEFAULTASSIGNEE",
            "source": "PERSONGROUP",
            "remarks": "Relationship to persongroupteam used to find all members of group",
            "whereClause": "persongroup=:persongroup and (groupdefault=:yes or orgdefault=:yes or sitedefault=:yes)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLPERSONGROUPTEAM",
            "source": "PERSONGROUP",
            "remarks": "Relationship to persongroupteam used to find all members of group",
            "whereClause": "persongroup=:persongroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYMEMBER_ALTERNATES",
            "source": "PERSONGROUPTEAM",
            "remarks": "Allow persongroupteam to retrieve alternates",
            "whereClause": "persongroup=:persongroup and resppartygroup=:resppartygroup and resppartygroup!=respparty",
            "cardinality": "UNDEFINED"
        }
    ]
}