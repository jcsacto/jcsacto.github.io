mos = {
    "objectName": "SECURITYRESTRICT",
    "className": "psdi.app.signature.SecurityRestrictSet",
    "description": "Data restrictions",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SECURITYRESTRICTID",
    "primaryKeyColumns": [
        "APP",
        "GROUPNAME",
        "ATTRIBUTENAME",
        "OBJECTNAME",
        "RESTRICTION",
        "TYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute Restricted",
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
            "objectName": "MAXOBJECT",
            "targetObject": "SECURITYRESTRICT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SECURITYRESTRICTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "Security group name",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object name to which the restriction is being applied",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Attribute to which the restrictions are being applied",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REEVALUATE",
            "required": true,
            "persistent": true,
            "title": "Reevaluate",
            "remarks": "Select this option for the restriction condition to be reevaluated when the user tabs to another field. If you do not select this option, the restriction conditions are evaluated after the changes to a field are saved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESTRICTION",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of restriction being configured. Valid types are Hidden, Required, Read-only and Qualified. Qualified means that only data meeting the condition is 'qualified' to be fetched from the database and can only be applied to top-level objects (not child objects or attributes).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "Specify a conditional expression.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Data Element being restricted - object or attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SRESTRICTNUM",
            "required": true,
            "persistent": true,
            "title": "Restriction ID",
            "remarks": "Security Restriction name, unique user-readable identifier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COLLECTIONAUTH",
            "target": "COLLECTIONAUTH",
            "remarks": "Relationship from SecurityRestrict to CollectionAuth",
            "whereClause": "(:srestrictnum  = sridciqual and sridciqual is not null) or (:srestrictnum  = sridassetqual and sridassetqual is not null) or (:srestrictnum  = sridlocationqual and sridlocationqual is not null) or (:srestrictnum  = sridcihide and sridcihide is not null) or (:srestrictnum  = sridassethide and sridassethide is not null) or (:srestrictnum  = sridlocationhide and sridlocationhide is not null) or (:srestrictnum  = sridmaqual and sridmaqual is not null) or (:srestrictnum  = sridmahide and sridmahide is not null) or (:srestrictnum  = sridaaqual and sridaaqual is not null) or (:srestrictnum  = sridaahide and sridaahide is not null)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from Security Restriction to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship from Security Restriction to MaxApps",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship from Security Restriction to MaxGroup",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship from Security Restriction to MaxGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relationship from Security Restriction to MaxObject",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTROW",
            "target": "MAXOBJECT",
            "remarks": "Relationship from Security Restriction to MaxObject for row restrictions only",
            "whereClause": "objectname = :objectname and :type in (select maxvalue from synonymdomain where domainid = 'RESTRICTTYPE' and maxvalue = 'ROW')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SECURITYRESTRICT",
            "source": "COLLECTION",
            "remarks": "Relationship from Collection to SecurityRestrict",
            "whereClause": "srestrictnum in (select sridciqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridassetqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridlocationqual from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridcihide from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridassethide from collectionauth where collectionnum = :collectionnum) or srestrictnum in (select sridlocationhide from collectionauth where collectionnum = :collectionnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "COLLECTIONAUTH",
            "remarks": "Relationship from CollectionAuth to SecurityRestrict",
            "whereClause": "srestrictnum = :sridciqual or srestrictnum = :sridassetqual or srestrictnum = :sridlocationqual or srestrictnum = :sridcihide or srestrictnum = :sridassethide or srestrictnum = :sridlocationhide or srestrictnum = :sridmaqual or srestrictnum = :sridmahide or srestrictnum = :sridaaqual or srestrictnum = :sridaahide",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "CONDITION",
            "remarks": "Relationship from Condition to Security Restriction",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "MAXAPPS",
            "remarks": "Relationship from MaxApps to Security Restriction",
            "whereClause": "app = :app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "MAXATTRIBUTE",
            "remarks": "Relationship from MaxAttribute to Security Restriction",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to Security Restriction",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GROUPATTRRESTRICT",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for attribute-level restrictions",
            "whereClause": "groupname = :groupname and objectname is not null and attributename is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GROUPOBJRESTRICT",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for object-level restrictions",
            "whereClause": "groupname = :groupname and objectname is not null and attributename is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OBJRESTRICT",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for global object-level restrictions",
            "whereClause": "groupname is null and objectname is not null and attributename is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ATTRRESTRICT",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to SecurityRestrict for global attribute-level restrictions",
            "whereClause": "groupname is null and objectname is not null and attributename is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICT",
            "source": "MAXOBJECT",
            "remarks": "Relationship from MaxObject to Security Restriction",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SECURITYRESTRICTROW",
            "source": "MAXOBJECT",
            "remarks": "Relationship from MaxObject to Security Restriction for row restrictions only",
            "whereClause": "objectname = :objectname and :type in (select maxvalue from synonymdomain where domainid = 'RESTRICTTYPE' and maxvalue = 'ROW')",
            "cardinality": "UNDEFINED"
        }
    ]
}