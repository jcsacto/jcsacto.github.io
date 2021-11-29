mos = {
    "objectName": "MAXLICUSAGE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "License Usage details",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICUSAGEID",
    "primaryKeyColumns": [
        "MAXLICUSAGEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICUSAGE",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICUSAGE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User ID",
            "remarks": "User ID",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "Start date of this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": true,
            "persistent": true,
            "title": "End Date",
            "remarks": "End Date of this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSENUM",
            "required": false,
            "persistent": true,
            "title": "License Num",
            "remarks": "License num  assigned to this userid",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "ISSELFSERVICEUSER",
            "required": true,
            "persistent": true,
            "title": "Is self-service user",
            "remarks": "Is self-service user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISUNLICUSER",
            "required": true,
            "persistent": true,
            "title": "Is unlicensed user",
            "remarks": "Is unlicensed user",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLATEST",
            "required": true,
            "persistent": true,
            "title": "Is Latest",
            "remarks": "Is this latest record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONRUNID",
            "required": false,
            "persistent": true,
            "title": "Run Id",
            "remarks": "This is used only by the background process",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Timestamp when this record was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEDATE",
            "required": false,
            "persistent": true,
            "title": "Update Date",
            "remarks": "Update Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICUSAGEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EMAIL",
            "target": "EMAIL",
            "remarks": "Relationship from MAXLICUSAGE to EMAIL table.",
            "whereClause": "personid=(select personid from maxuser where userid=:userid) and isprimary=1",
            "cardinality": null
        },
        {
            "name": "MAXLICENSE",
            "target": "MAXLICENSE",
            "remarks": "Relationship from MAXLICUSAGE to MAXLICENSE table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "Relationship from MAXLICUSAGE to MAXUSER table.",
            "whereClause": "userid=:userid",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship from MAXLICUSAGE to MAXUSER table.",
            "whereClause": "personid=(select personid from maxuser where userid=:userid)",
            "cardinality": null
        },
        {
            "name": "SUPERVISOR",
            "target": "PERSON",
            "remarks": "Relationship from MAXLICUSAGE to EMAIL table.",
            "whereClause": "personid=(select supervisor from person a, maxuser b where b.userid=:userid and b.personid=a.personid)",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship from MAXLICUSAGE to SITE table.",
            "whereClause": "siteid = (select defsite from maxuser where userid='WILSON')",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLICUSAGE",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to MAXLICUSAGE table.",
            "whereClause": "licensenum=:licensenum and islatest=1",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MAXLICUSAGE",
            "source": "MAXUSER",
            "remarks": "Relationship from MAXUSER to MAXLICUSAGE table.",
            "whereClause": "userid=:userid and licensenum is not null and islatest=1",
            "cardinality": null
        }
    ]
}