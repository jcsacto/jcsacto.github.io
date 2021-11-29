mos = {
    "objectName": "AUTOKEY",
    "className": "psdi.app.system.AutoKeySet",
    "description": "The AUTOKEY Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "AUTOKEYID",
    "primaryKeyColumns": [
        "AUTOKEYNAME",
        "SITEID",
        "ORGID",
        "SETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "AUTOKEY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "AUTOKEY",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "AUTOKEY",
            "parentKeys": "SETID",
            "targetKeys": "SETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item or Company Set",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "AUTOKEY",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PREFIX",
            "required": false,
            "persistent": true,
            "title": "Prefix",
            "remarks": "You can enter a value to be inserted in front of each autonumber, for example PR to go in front of each autonumbered purchase requisition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEED",
            "required": true,
            "persistent": true,
            "title": "Seed",
            "remarks": "If you are creating a new autokey, enter the number you want to begin the autonumbering sequence with. If an autokey already exists for this field, the field shows the next number to be inserted by the autonumbering process. For example, in Organization Level autonumbering, if the last PR number entered by autonumbering in the Purchase Requsitions application was 1014, the seed for PR Number will be 1015.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "AUTOKEYNAME",
            "required": true,
            "persistent": true,
            "title": "Autonumber Name",
            "remarks": "Autokey Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SETID",
            "required": false,
            "persistent": true,
            "title": "Set",
            "remarks": "setid can be itemsetid or companysetid",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "AUTOKEYID",
            "required": true,
            "persistent": true,
            "title": "AUTOKEYID",
            "remarks": "Unique identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "AUTOKEY",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to AutoKey table",
            "whereClause": "autokeyname = :autokeyname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOKEY",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the the AutoKey table, used to find the organization's organization-level AutoKeys. (autokey.orgid = organization.orgid and autokey.siteid is null. This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid and siteid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOKEYALL",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the AutoKey table, used to find the organization's organization-level and site-level AutoKeys. (autokey.orgid = organization.orgid. This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYSTEMLEVEL",
            "source": "ORGANIZATION",
            "remarks": "Relationship to Autokey to get System Level Autokeys.",
            "whereClause": "orgid is null and siteid is null and setid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SETLEVEL",
            "source": "ORGANIZATION",
            "remarks": "Relationship to Autokey to get Set Level Autokeys. (orgid is null and siteid is null and (setid = organization.itemsetid or setid = organization.companysetid)",
            "whereClause": "orgid is null and siteid is null and (setid =:itemsetid or setid = :companysetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOKEY",
            "source": "SETS",
            "remarks": "Relationship to Autokey table",
            "whereClause": "setid = :setid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOKEY",
            "source": "SITE",
            "remarks": "Relationship between Site and AutoKey table, used to find the site's AutoKey records. (autokey.siteid = site.siteid and autokey.orgid = site.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}