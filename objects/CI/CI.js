mos = {
    "objectName": "CI",
    "className": "psdi.app.ci.CISet",
    "description": "Configuration Item Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CIID",
    "primaryKeyColumns": [
        "CINUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "CI",
            "targetObject": "CISPEC",
            "parentKeys": "CIID",
            "targetKeys": "REFOBJECTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configuration Item Specification",
            "longDescription": null
        },
        {
            "objectName": "CI",
            "targetObject": "RECONCILINK",
            "parentKeys": "CIID",
            "targetKeys": "CIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Configure Item",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ACTCINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual CI",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CI",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "CI",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ASSETLOCSITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All CIs (configuration items) for the current Asset.",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "CI",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ASSETLOCORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Calenar",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "CI",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CI",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "SERVICE, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "CI",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "SERVICEGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "CI",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item Configuration Information",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CI",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, CILOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CI",
            "parentKeys": "ORGID",
            "targetKeys": "ASSETLOCORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for Location / Asset",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CI",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CI",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Owner of CI",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "CI",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "CI",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ASSETLOCORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset / Location Shift",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CI",
            "parentKeys": "SITEID",
            "targetKeys": "ASSETLOCSITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Location Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CIID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINUM",
            "required": true,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "Authorized CI Identifier",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the Authorized CI",
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
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Classification of the CI.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CILOCATION",
            "required": false,
            "persistent": true,
            "title": "Physical Location",
            "remarks": "Location where the CI is physically located",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Current life cycle state of the CI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date of CI",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar that is associated with the CI",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Shift that is associated with the CI's calendar",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Associated Asset",
            "remarks": "Identifier of the Asset which is the CI",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Associated Location",
            "remarks": "Identifier of the Location which is the CI",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Associated Item",
            "remarks": "Identifier of Item which is the CI",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SERVICE",
            "required": false,
            "persistent": true,
            "title": "Associated Service",
            "remarks": "Identifier of Service which is the CI",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ASSETLOCSITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "The Site to which the CI belongs to if it is Asset or Location.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSETLOCORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "The Organization to which the CI belongs to if it is Asset or Location.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "The Item Set to which the CI belongs to if it is an Item or Service.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVICEGROUP",
            "required": false,
            "persistent": true,
            "title": "Service Group",
            "remarks": "Identifies the Service Group to which the Service belongs to.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "ACTCINUM",
            "required": false,
            "persistent": true,
            "title": "Actual CI",
            "remarks": "Actual CI Identifier",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "ASOFDATE",
            "required": false,
            "persistent": false,
            "title": "As of",
            "remarks": "Displays the relationships that existed with the current CI as of the date specified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the CI status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CIGUID",
            "required": false,
            "persistent": false,
            "title": "CI GUID",
            "remarks": "Actual CI GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "PERSONID",
            "required": false,
            "persistent": true,
            "title": "CI Owner",
            "remarks": "Owner of the CI",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Change Status Memo",
            "remarks": "Status change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Hierarchypath of the classstructure of the CI.",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTUALCI",
            "target": "ACTCI",
            "remarks": "Relationship to the ActualCI table, used to find actual CI for a given CI",
            "whereClause": "actcinum=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTUALCISPEC",
            "target": "ACTCISPEC",
            "remarks": "Relationship to the actual CI specifications",
            "whereClause": "actcinum = :actcinum and classstructureid = (select classstructureid from actci where actcinum = :actcinum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Assets table, used to find asset for a given CI Asset",
            "whereClause": "assetnum=:assetnum and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETANCESTOR",
            "target": "ASSETANCESTOR",
            "remarks": "Relationship to the assetancestor records, used to find the assetancestor records for a given ci.",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCUSTODIAN",
            "target": "ASSETUSERCUST",
            "remarks": "custodian record for the ci asset",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSER",
            "target": "ASSETUSERCUST",
            "remarks": "user record for the ci asset",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given ci.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "BOOKMARK",
            "target": "BOOKMARK",
            "remarks": "Relationship to the bookmark records, used to find the bookmark records for a given CI",
            "whereClause": "app='CI' and keyvalue=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CICHANGESTATUS",
            "target": "CICHANGESTATUS",
            "remarks": "Relationship to the nonpersistent object used for CI change status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDCI",
            "target": "CIRELATION",
            "remarks": "Relationship to the CIRealtion table, used to find child CIs for a given CI.",
            "whereClause": "parentci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDCI",
            "target": "CIRELATION",
            "remarks": "Relationship to the CIRelation table, used to find related ci's for a given CI",
            "whereClause": "sourceci=:cinum or targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTCI",
            "target": "CIRELATION",
            "remarks": "Relationship to the CIRelation table, used to find parent ci  for a given CI",
            "whereClause": "parentci is not null and (sourceci=:cinum or targetci=:cinum) and parentci <>:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHIS",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find cirelationhis records for a given CI",
            "whereClause": "sourceci=:cinum or targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISSOURCE",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find sourceci's for a given CI ",
            "whereClause": "targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISSOURCEASOF",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find sourceci's for a given CI with asofdate",
            "whereClause": "targetci=:cinum and ((enddate is not null and :asofdate between startdate and enddate) or (enddate is null and startdate <=:asofdate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISTARGET",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find targetci's for a given CI ",
            "whereClause": "sourceci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISTARGETASOF",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find targetci's for a given CI with asofdate",
            "whereClause": "sourceci=:cinum and ((enddate is not null and :asofdate between startdate and enddate) or (enddate is null and startdate <=:asofdate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPEC",
            "target": "CISPEC",
            "remarks": "Relationship to the cispec table, used to find the cispec records for a given ci (ci.ciid=cispec.refobjectid). The resulting set will contain zero or more objects.",
            "whereClause": "refobjectid=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPECCLASS",
            "target": "CISPEC",
            "remarks": "Relationship to the CISpec table, used to find all specifications for a given CI with a given classstructureid.",
            "whereClause": "cinum=:cinum and classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISPECHIS",
            "target": "CISPECHIS",
            "remarks": "Relationship to the CISpecHis table, used to find cispechis records for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCISPECHIS",
            "target": "CISPECHIS",
            "remarks": "Relationship to the cispechis table, used to find the specifications history records for a given ci (cispechis.cinum=ci.cinum and ((cispechis.enddate is null and cispechis.startdate <=ci.asofdate) or (cispechis.enddate is not null and ci.asofdate between cispechis.startdate and cispechis.enddate))). The resulting set will contain zero or more objects.",
            "whereClause": "cinum=:cinum and ((enddate is null and startdate<=:asofdate) or (enddate is not null and :asofdate between startdate and enddate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CISTATUS",
            "target": "CISTATUS",
            "remarks": "Relationship to the CIStatus table, used to find cistatus records for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given ci (ci.classstructureid=classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find all class specification records for a given configuration item (classspec.classstructureid = ci.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find a class structure record for a given CI specification. (classstructure.classstructureid = ci.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSUSEWITH",
            "target": "CLASSUSEWITH",
            "remarks": "Relationship to the ClassUseWith table, used to find classusewith for a given CI.",
            "whereClause": "classstructureid=:classstructureid and objectname = 'CI'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find collectdetails record for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT2",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a COLLECTDETAILS record for a given CI. (COLLECTDETAILS.cinum = CI.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMODITY",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI service",
            "whereClause": "commodity=:service and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICE",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI service",
            "whereClause": "commodity=:service and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEGROUP",
            "target": "COMMODITIES",
            "remarks": "Relationship to the Commodities table, used to find commodity for a given CI servicegroup",
            "whereClause": "commodity=:servicegroup and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the CI's DocLinks records, used to find documents for a given CI. (doclinks.keytable = 'CI' and doclinks.keycolumn = 'CINUM' and ci.cinum= doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'CI' and ownerid = :ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the CI to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a CI field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INCIDENT",
            "target": "INCIDENT",
            "remarks": "Relationship to the INCIDENT table, used to find INCIDENT record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INCIDENTCI",
            "target": "INCIDENT",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find item for a given CI Item",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the ancestors of a given ci.",
            "whereClause": "location =:location and siteid = :assetlocsiteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find location for a given CI Location",
            "whereClause": "location=:location and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CILOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find location for a given CI CILocation",
            "whereClause": "location=:cilocation and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MULTIASSETLOCCI table, used to find MULTIASSETLOCCI  record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "target": "OMPCIRLN",
            "remarks": "Relationship between CIs and OMPs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ciguid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "Relationship from CI to Organization",
            "whereClause": "orgid = :assetlocorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEM",
            "target": "PROBLEM",
            "remarks": "Relationship to the PROBLEM table, used to find PROBLEM record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEMCI",
            "target": "PROBLEM",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SR",
            "target": "SR",
            "remarks": "Relationship to the SR table, used to find SR record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRCI",
            "target": "SR",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship to the TICKET table, used to find TICKET record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the CI to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOACTIVITY",
            "target": "WOACTIVITY",
            "remarks": "Relationship to the WOACTIVITY table, used to find WOACTIVITYrecord for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOACTIVITYCI",
            "target": "WOACTIVITY",
            "remarks": "Relationship to the WOACTIVITY table, used to find change for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGE",
            "target": "WOCHANGE",
            "remarks": "Relationship to the WOCHANGE table, used to find WOCHANGE record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGECI",
            "target": "WOCHANGE",
            "remarks": "Relationship to the WOCHANGE table, used to find change for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASE",
            "target": "WORELEASE",
            "remarks": "Relationship to the WORELEASE table, used to find WORELEASE record for a given CI.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASECI",
            "target": "WORELEASE",
            "remarks": "Relationship to the WORELEASE table, used to find change for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORKORDER",
            "target": "WORKORDER",
            "remarks": "Relationship to the WORKORDER table, used to find WORKORDER record for a given CI.",
            "whereClause": "cinum=:cinum and woclass in (select value from synonymdomain where domainid ='WOCLASS' and maxvalue='WORKORDER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "target": "WORKORDER",
            "remarks": "workorders by CINUM",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CI",
            "source": "ACTCI",
            "remarks": "Relationship to the CI table, used to find a Authorized CI record that is linked to the Actual CI record. (actci.actcinum = ci.actcinum). The resulting set will contain zero or one object.",
            "whereClause": "actcinum = :actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIEXISTS",
            "source": "ACTCI",
            "remarks": "Relationship to the ci table, used to find CI record for a given relationship",
            "whereClause": "cinum=:actcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NOACTCI",
            "source": "ACTCI",
            "remarks": "Relationship to the CI table, used to find ci not linked to any actci",
            "whereClause": "actcinum is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Service field to the CI table - used to View Related Records for Service.",
            "whereClause": "service=:affectedcommodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "ASSET",
            "remarks": "Relationship to the CI table, used to find CI for a given Asset.",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "AUTOATTRUPDATE",
            "remarks": "Relationship to the ci table, used to find ci. The result set will contain one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PARENTCI",
            "source": "CIRELATION",
            "remarks": "Relationship to the CI table, used to find ci for a given parentci",
            "whereClause": "cinum=:parentci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECI",
            "source": "CIRELATION",
            "remarks": "Relationship to the CI table, used to find ci for a given sourceci",
            "whereClause": "cinum=:sourceci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCI",
            "source": "CIRELATION",
            "remarks": "Relationship to the CI table, used to find ci for a given targetci",
            "whereClause": "cinum=:targetci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECI",
            "source": "CIRELATIONHIS",
            "remarks": "Relationship to the CI table, used to find ci for a given sourceci",
            "whereClause": "cinum=:sourceci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCI",
            "source": "CIRELATIONHIS",
            "remarks": "Relationship to the CI table, used to find ci for a given targetci",
            "whereClause": "cinum=:targetci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "CLASSSTRUCTURE",
            "remarks": " Relationship to the CI table, used to find the CI records for a given classstructure. (classstructure.classstructureid = CI.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": " Relationship to the CI table, used to find the CI records for a given classstructure. (classstructure.classstructureid = CI.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": " classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the CI table, used to find a CI for a given COLLECDETAIL. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER record. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "source": "COMMODITIES",
            "remarks": "Relatinship to the CI table",
            "whereClause": "service = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "source": "COMMODITIES",
            "remarks": "Relatinship to the CI table",
            "whereClause": "servicegroup = :commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "INCIDENT",
            "remarks": "Relationship to the CI table, used to find a CI record for a given INCIDENT. (CI.cinum = INCIDENT.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "INVENTORY",
            "remarks": "Relationship from INVENTORY to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "ITEM",
            "remarks": "Relationship from ITEM to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "ITEMORGINFO",
            "remarks": "Relationship from ITEMORGINFO to the CONTRACTLINE table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "LOCATIONS",
            "remarks": "Relationship to the CI table, used to find CI for a given Location.",
            "whereClause": "location=:location and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "MULTIASSETLOCCI",
            "remarks": "View CI Collections",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "MULTIASSETLOCCI",
            "remarks": "relationship for view actual ci",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "MULTIASSETLOCCI",
            "remarks": "View CI Relationship History",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "source": "MULTIASSETLOCCI",
            "remarks": "CI record for the multiassetloc",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "MULTIASSETLOCCI",
            "remarks": "CI record for the multiassetlocci",
            "whereClause": "cinum=:cinum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "CI",
            "source": "OMPCIRLN",
            "remarks": "Relationship between OMPs and CIs, that shows all of the CIs that an OMP manages.",
            "whereClause": "ciguid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "PROBLEM",
            "remarks": "Relationship to the CI table, used to find a CI record for a given PROBLEM. (CI.cinum = PROBLEM.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCILINK_CI",
            "source": "RECONCILINK",
            "remarks": "Relationship to the CI object, used to find the CI record for the reconcilink based on the cinum.",
            "whereClause": "cinum= :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONCILINK_CIID",
            "source": "RECONCILINK",
            "remarks": "Relationship to the CI object, used to find the CI record for the reconcilink based on the ciid.",
            "whereClause": "ciid=:ciid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "RECONCILINK",
            "remarks": "View CI Collections",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "RECONCILINK",
            "remarks": "View Actual CI Details",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "RECONCILINK",
            "remarks": "View CI Relationship History",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum. (CI.cinum = RECONCIRESULT.cinum)",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ANCESTORCI",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the ancestorcinum.",
            "whereClause": "cinum=:ancestorcinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "RECONCIRESULT",
            "remarks": "Relationship to the CI table, used to find the CI record for the reconciresult based on the cinum.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "SR",
            "remarks": "Relationship to the CI table, used to find a CI record for a given SR. (CI.cinum = SR.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "TICKET",
            "remarks": "relationship from Ticket to the CI table",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "source": "TICKET",
            "remarks": "CI record for the ticket",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONCI",
            "source": "TICKET",
            "remarks": "CI record for the tickets location",
            "whereClause": "location=:location and assetlocsiteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "TICKET",
            "remarks": "Relationship to the CI table, used to find a CI record for a given ticket record. (CI.cinum = ticket.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "TICKET",
            "remarks": "Relationship to the CI table, used to find a CI record for a given ticket record. (CI.cinum = ticket.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the CI table, used to find the CI for the current non-persistent VIEWWOPMS object. (ci.cinum=viewwopms.cinum).  The resulting set will contain one object.",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VCICOLLECT",
            "source": "WORKORDER",
            "remarks": "Relationship to the CI table, used to find a CI record for a given COLLECTDETAILS record. (CI.cinum = COLLECTDETAILS.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWACTCI",
            "source": "WORKORDER",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCIRELHIS",
            "source": "WORKORDER",
            "remarks": "Relationship to the CI table, used to find a CI record for a given WORKORDER record. (CI.cinum = WORKORDER.cinum). The resulting set will contain zero or one object.",
            "whereClause": "cinum = :cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCI",
            "source": "WORKORDER",
            "remarks": "CI record for the workorder",
            "whereClause": "assetnum=:assetnum and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "source": "WORKORDER",
            "remarks": "CI record for the work order",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMCI",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "service=:commodity",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMMGRPCI",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "servicegroup=:commoditygroup",
            "cardinality": "UNDEFINED"
        }
    ]
}