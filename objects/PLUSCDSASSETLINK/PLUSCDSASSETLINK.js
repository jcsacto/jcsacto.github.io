mos = {
    "objectName": "PLUSCDSASSETLINK",
    "className": "psdi.plusc.app.pluscds.PlusCDSAssetsLinkSet",
    "description": "Data Sheet Asset Link",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCDSASSETLINKID",
    "primaryKeyColumns": [
        "PLUSCDSASSETLINKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 114",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCDSASSETLINK",
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
            "attributeName": "DSASSETSLINKID",
            "required": true,
            "persistent": true,
            "title": "Asset Link ID",
            "remarks": "Link Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "ASSET",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DSAL1",
            "required": false,
            "persistent": true,
            "title": "Extra Field 1",
            "remarks": "DSAL1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL2",
            "required": false,
            "persistent": true,
            "title": "Extra Field 2",
            "remarks": "DSAL2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL3",
            "required": false,
            "persistent": true,
            "title": "Extra Field 3",
            "remarks": "DSAL3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL4",
            "required": false,
            "persistent": true,
            "title": "Extra Field 4",
            "remarks": "DSAL4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL5",
            "required": false,
            "persistent": true,
            "title": "Extra Field 5",
            "remarks": "DSAL5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL6",
            "required": false,
            "persistent": true,
            "title": "Extra Field 6",
            "remarks": "DSAL6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL7",
            "required": false,
            "persistent": true,
            "title": "Extra Field 7",
            "remarks": "DSAL7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL9",
            "required": false,
            "persistent": true,
            "title": "Extra Field 9",
            "remarks": "DSAL9",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL10",
            "required": false,
            "persistent": true,
            "title": "Extra Field 10",
            "remarks": "DSAL10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "ItemSet Identifier",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset Description",
            "remarks": "Asset Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL8",
            "required": false,
            "persistent": true,
            "title": "Extra Field 8",
            "remarks": "DSAL8",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet Revision Number",
            "remarks": "Data Sheet Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "PLUSCDSASSETLINKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
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
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset Description Long description",
            "remarks": "Long Description for Asset Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the PLUSCDSASSETLINK to the non-persistent DrillDown table. (No where clause). Used on the Work Asset tab from Data Sheets",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PLUSCASSETSLINK",
            "target": "PLUSDSPLAN",
            "remarks": "Relationship to PLUSDSPLAN",
            "whereClause": "dsplannum =:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": "Relationship from plusdsassetlink to pludsplan",
            "whereClause": "dsplannum=:dsplannum and revisionnum in (select revisionnum from plusdsplan where dsplannum=:dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR')) and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null))",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCASSETSLINK",
            "source": "ASSET",
            "remarks": "Relationship to PLUSCDSASSETLINK",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR') and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null)))",
            "cardinality": null
        },
        {
            "name": "PLUSCDSASSETLINK",
            "source": "LOCATIONS",
            "remarks": "Relationship to PLUSCDSASSETLINK for the Attach Data Sheets dialog",
            "whereClause": "location=:location and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR'))",
            "cardinality": null
        },
        {
            "name": "PLUSCDSASSETSLINK",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCTLASSETSLINK",
            "source": "TOOLITEM",
            "remarks": "Relationship from toolitem to pluscdsassetslink",
            "whereClause": "itemnum=:itemnum and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR'))",
            "cardinality": null
        }
    ]
}