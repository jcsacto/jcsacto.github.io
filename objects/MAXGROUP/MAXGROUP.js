mos = {
    "objectName": "MAXGROUP",
    "className": "psdi.app.signature.MaxGroupSet",
    "description": "Security Group table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXGROUPID",
    "primaryKeyColumns": [
        "GROUPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "APPFIELDDEFAULTS",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GRPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group the field default applies to.",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "COLLECTIONAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "CTRLGROUP",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Group",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "GLAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "GROUPUSER",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "GRPREASSIGNAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "KPIAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "LABORAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "LIMITTOLERANCE",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "LOCAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "GROUPNAME",
            "targetKeys": "CHANGEBY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPFACAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTAPPAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Groups who can access this report.",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "REPORTOSAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Group with Access to Report Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "SCCONFIG",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Ownership for Start Center",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "SITEAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "VIEWSECURITYDET",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security group.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXGROUP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXGROUP",
            "parentKeys": "APP",
            "targetKeys": "DFLTAPP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Start Application for the group.",
            "longDescription": null
        },
        {
            "objectName": "SCTEMPLATE",
            "targetObject": "MAXGROUP",
            "parentKeys": "SCTEMPLATEID",
            "targetKeys": "SCTEMPLATEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Center Template",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXGROUPID",
            "required": true,
            "persistent": true,
            "title": "MAXGROUPID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Group description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDDURATION",
            "required": false,
            "persistent": true,
            "title": "Password Lasts this Number of Days",
            "remarks": "Number of days that a password is active. Defaults from the maxvar PASSWORDDURATION.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORDWARNING",
            "required": false,
            "persistent": true,
            "title": "Days Before Password Expires to Warn User",
            "remarks": "Number of days before expiration to warn the user that the password is about to expire. Defaults from the maxvar PASSWORDWARNING.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INDEPENDENT",
            "required": true,
            "persistent": true,
            "title": "Independent of Other Groups",
            "remarks": "Indicates whether the setting on this Group will apply to sites on other non-independent groups and vice-versa.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHALLSITES",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for All Sites",
            "remarks": "Indicates whether this group has access to all sites in all organizations",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHALLGLS",
            "required": true,
            "persistent": true,
            "title": "Authorize Group to Change All GL Component Types",
            "remarks": "Indicates whether this group can edit all GL segments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHALLSTOREROOMS",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for All Storerooms",
            "remarks": "Indicates whether this group is authorized for all storerooms",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHLABORALL",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for All Labor",
            "remarks": "Indicates whether this group is authorized for all labor",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHLABORCREW",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for Labor in Their Same Crew",
            "remarks": "Indicates whether this group is authorized for all labor in the same crew",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHLABORSELF",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for Their Own Labor",
            "remarks": "Indicates whether this group is authorized for its own labor code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHLABORSUPER",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for Labor They Supervise",
            "remarks": "Indicates whether this group is authorized for all labor that this group supervises",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "SCTEMPLATEID",
            "required": false,
            "persistent": true,
            "title": "Start Center Template",
            "remarks": "Unique identifier for Start Center Template",
            "sameAsAttribute": "SCTEMPLATEID",
            "sameAsObject": "SCTEMPLATE"
        },
        {
            "attributeName": "AUTHPERSONGROUP",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for Labor in Their Same Person Group",
            "remarks": "Indicates whether this security group is authorized for all labor in the same person group",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NULLREPFAC",
            "required": true,
            "persistent": true,
            "title": "Allow Access to Records That Do Not Have a Repair Facility",
            "remarks": "Specifies whether to allow the group access to records that do not specify a repair facility.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHALLREPFACS",
            "required": true,
            "persistent": true,
            "title": "Authorize Group for All Repair Facilities",
            "remarks": "Specifies whether to allow the group access to all records that specify any repair facility.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXSCHEDREPORT",
            "required": false,
            "persistent": true,
            "title": "Scheduled Reports Limit",
            "remarks": "The maximum number of reports that users in this security group can schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCCONTENTUID",
            "required": false,
            "persistent": false,
            "title": "Sctemplate contentuid",
            "remarks": "Sctempalte contentuid ",
            "sameAsAttribute": "CONTENTUID",
            "sameAsObject": "SCTEMPLATE"
        },
        {
            "attributeName": "DFLTAPP",
            "required": false,
            "persistent": true,
            "title": "Default Application",
            "remarks": "Specify the default application for users of the security group that will display when users log in and a user default application is not specified.",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "ADHOCCREATELIMIT",
            "required": false,
            "persistent": true,
            "title": "Ad Hoc Preview Records Limit",
            "remarks": "The maximum number of queried records that users can preview when they create an ad hoc report. This limit only applies to security groups that can create reports.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTSTOPLIMIT",
            "required": false,
            "persistent": true,
            "title": "Report Server Records Limit",
            "remarks": "The maximum number of records in the report hierarchy that are processed before the report is canceled on the report server. This limit prevents extremely large reports from running.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIDENAV",
            "required": true,
            "persistent": true,
            "title": "Display Side Navigation Menu",
            "remarks": "Indicates whether the side navigation menu is displayed instead of the horizontal navigation toolbar.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Application authorities for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "COLLECTIONAUTH",
            "target": "COLLECTIONAUTH",
            "remarks": "Relationship from MaxGroup to CollectionAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship from MaxGroup to CtrlGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLAUTH",
            "target": "GLAUTH",
            "remarks": "GL segment override authorities for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GLCONFIGURE",
            "target": "GLCONFIGURE",
            "remarks": "MaxGroup to GLConfigure, will contain all rows from GLConfigure",
            "whereClause": "orgid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GROUPUSER",
            "target": "GROUPUSER",
            "remarks": "RoleUser records for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GRPREASSIGNAUTH",
            "target": "GRPREASSIGNAUTH",
            "remarks": "RoleReassignAuth records for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORAUTH",
            "target": "LABORAUTH",
            "remarks": "Labor authorizations for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LIMITTOLERANCE",
            "target": "LIMITTOLERANCE",
            "remarks": "Relationship from MaxGroup to LimitTolerance",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCAUTH",
            "target": "LOCAUTH",
            "remarks": "Location authorizations for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from MAXGROUP.",
            "whereClause": "ldkey=:maxgroupid and ldownertable = 'MAXGROUP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship for MaxGroup to MaxApps",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTUPAPPLICATION",
            "target": "MAXAPPS",
            "remarks": "Default group startup application relationship.",
            "whereClause": "app=:dfltapp",
            "cardinality": null
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "MaxGroup to Organization, by LimitOrgID",
            "whereClause": "orgid = :limitorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPFACAUTH",
            "target": "REPFACAUTH",
            "remarks": "Relationship from MaxGroup to RepFacAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        },
        {
            "name": "SCTEMPLATE",
            "target": "SCTEMPLATE",
            "remarks": "MaxGroup to SCTemplate",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxGroup to Security Restriction",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GROUPATTRRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for attribute-level restrictions",
            "whereClause": "groupname = :groupname and objectname is not null and attributename is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GROUPOBJRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for object-level restrictions",
            "whereClause": "groupname = :groupname and objectname is not null and attributename is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OBJRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for global object-level restrictions",
            "whereClause": "groupname is null and objectname is not null and attributename is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ATTRRESTRICT",
            "target": "SECURITYRESTRICT",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for global attribute-level restrictions",
            "whereClause": "groupname is null and objectname is not null and attributename is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITEAUTH",
            "target": "SITEAUTH",
            "remarks": "Site authorizations for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "USERSECCONTROL",
            "target": "USERSECCONTROL",
            "remarks": "MaxGroup to UserSecControl",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXGROUP",
            "source": "APPLICATIONAUTH",
            "remarks": "Role that owns this ApplicationAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "COLLECTIONAUTH",
            "remarks": "Relationship from CollectionAuth to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "CTRLGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find the current group. (maxgroup.groupname = ctrlgroup.groupname). The resulting set will contain zero or one object.",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUPSELECT",
            "source": "CTRLGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find all groups. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "CTRLMAPCONTROLGROUPS",
            "remarks": "Relationship to MAXGROUP from CTRLMAPCONTROLGROUPS.",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        },
        {
            "name": "MAXGROUP",
            "source": "GLAUTH",
            "remarks": "Role that owns this GLAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "GROUPUSER",
            "remarks": "Role associated with this RoleUser",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "GRPREASSIGNAUTH",
            "remarks": "Role related to this RoleReassignAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "KPIAUTH",
            "remarks": "Relationship from the KPI Schedule table to the crontask instance table",
            "whereClause": "groupname=:groupname",
            "cardinality": null
        },
        {
            "name": "MAXGROUP",
            "source": "LIMITTOLERANCE",
            "remarks": "Relationship from LimitTolerance to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "REPORTAPPAUTH",
            "remarks": "MAXGROUP Relationship from REPORT to MAXGROUP",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "REPORTAUTH",
            "remarks": "MAXGROUP Relationship from REPORT to MAXGROUP",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "REPORTDIALOGDET",
            "remarks": "Relationship to MAXGROUP from REPORTDIALOGGR",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP_SEC",
            "source": "REPORTDIALOGDET",
            "remarks": "Relationship ised in setting report security",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "REPORTOSAUTH",
            "remarks": "Relationship to the MAXGROUP table, used to find the security group information for this report object structure authorization.",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        },
        {
            "name": "SCGRPTEMPLATE",
            "source": "SCCONFIG",
            "remarks": "Relationship to the MAXGROUP table, used to find a template associated withe this start center",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TEMPLATE_GROUP",
            "source": "SCTEMPLATE",
            "remarks": "Relationship to the MAXGROUP table, used to find which group is using this template. The resulting set will contain zero or more objects.",
            "whereClause": "sctemplateid = :sctemplateid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "SECURITYRESTRICT",
            "remarks": "Relationship from Security Restriction to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "SITEAUTH",
            "remarks": "Role that owns this SiteAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "USERSECURGROUP",
            "remarks": "UserSecurGroup to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "source": "VIEWSECURITYGR",
            "remarks": "Relationship to MAXGROUP from VIEWSECURITYGR",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        }
    ]
}