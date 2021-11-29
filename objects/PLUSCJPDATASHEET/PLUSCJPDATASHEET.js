mos = {
    "objectName": "PLUSCJPDATASHEET",
    "className": "psdi.plusc.app.pluscds.PlusCJPDataSheetSet",
    "description": "job plan data sheets",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PLUSCJPDATASHEETID",
    "primaryKeyColumns": [
        "PLUSCJPDATASHEETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "JOBPLAN",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "JPNUM, ORGID, SITEID, PLUSCREVNUM",
            "targetKeys": "JPNUM, ORGID, SITEID, PLUSCJPREVNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan",
            "longDescription": null
        },
        {
            "objectName": "JPASSETSPLINK",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "JPASSETSPLINKID",
            "targetKeys": "JPASSETSPLINKID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Job Plan Asset Safety Plan Link",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCJPDATASHEET",
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
            "attributeName": "JPASSETSPLINKID",
            "required": false,
            "persistent": true,
            "title": "JPASSETSPLINKID",
            "remarks": "JPASSETSPLINKID",
            "sameAsAttribute": "JPASSETSPLINKID",
            "sameAsObject": "JPASSETSPLINK"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "orgid",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "siteid",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DSPLANNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Unique identifier of the selected data sheet.",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "Job plan number",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCJPREVNUM",
            "required": true,
            "persistent": true,
            "title": "Job Plan Revision Number",
            "remarks": "Revision Number of associated job plan.",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Enter or select the asset this data sheet is associated with. This is used for loop calibrations.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence Number",
            "remarks": "Sequence Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCJPDATASHEETID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Defines the location number associated with the Asset.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "Indicates if the data sheet is required on the Work Order. This check box is selected by default for the first data sheet associated with the work asset. This check box becomes read-only when selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM_NP",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCJPDATASHEETASSET",
            "target": "ASSET",
            "remarks": "Relationship between PLUSCJPDATASHEET and Asset",
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location associated with the jp datasheet. This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDATASHEET",
            "target": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum in (select revisionnum from plusdsplan where dsplannum=:dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR')) and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCJPDSJOBPLAN",
            "source": "JOBPLAN",
            "remarks": null,
            "whereClause": "JPNUM=:JPNUM",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDSASSETSPLINK",
            "source": "JPASSETSPLINK",
            "remarks": null,
            "whereClause": "jpassetsplinkid=:jpassetsplinkid",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDATASHEET",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        }
    ]
}