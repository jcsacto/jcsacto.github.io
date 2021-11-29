mos = {
    "objectName": "WORELEXT",
    "className": "psdi.app.workorder.WOReleaseSet",
    "description": "The WORELEXT table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORELEXTID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "WORELEXT",
            "targetObject": "WORELEASE",
            "parentKeys": "WORELEXTID",
            "targetKeys": "WORELEXTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "WORelease Extra Data",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WORELEXT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORELEXT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WORELEXT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WORELEXT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the corresponding Work Order that these Release details are for.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RELEASEPOLICIES",
            "required": false,
            "persistent": true,
            "title": "Release Policies",
            "remarks": "Describes any policies governing the release.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASEDESIGN",
            "required": false,
            "persistent": true,
            "title": "Release Design",
            "remarks": "Describes the design and configuration of the release.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUILDPROCEDURES",
            "required": false,
            "persistent": true,
            "title": "Build Procedures",
            "remarks": "Describes how to package the release.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILESINRELEASE",
            "required": false,
            "persistent": true,
            "title": "Files in Rlease",
            "remarks": "Defines the list of files included in the release.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
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
            "attributeName": "WORELEXTID",
            "required": true,
            "persistent": true,
            "title": "WORELEXTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILESINRELEASE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Files in Release Long Description",
            "remarks": "Long Description for Files in Release",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUILDPROCEDURES_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Build Procedures Long Description",
            "remarks": "Long Description for Build Procedures",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASEDESIGN_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Release Design Long Description",
            "remarks": "Long Description for Release Design",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASEPOLICIES_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Release Policies for Long Description",
            "remarks": "Long Description for Release Policies",
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
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}