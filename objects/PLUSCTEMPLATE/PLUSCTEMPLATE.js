mos = {
    "objectName": "PLUSCTEMPLATE",
    "className": "psdi.plusc.app.plusctmplt.PlusCAssetTemplateSet",
    "description": "Asset Template Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PLUSCTEMPLATEID",
    "primaryKeyColumns": [
        "ORGID",
        "TEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, MANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Asset Template",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, VENDOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Vendor on Asset Template",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "PLUSCTEMPLATE",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETTYPE",
            "required": false,
            "persistent": true,
            "title": "Asset Type",
            "remarks": "The type of asset. Click Detail Menu to select from a list of valid asset types. For example, valid asset types might include facilities, operations, and so on. Note: When you apply the template, data in the Type field on existing assets is replaced with data from this field. However, if this field is blank, the content of the Type field on existing asset records is not changed.",
            "sameAsAttribute": "ASSETTYPE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "BUDGETCOST",
            "required": false,
            "persistent": true,
            "title": "Budgeted",
            "remarks": "Budgeted cost of work on this asset for the year. Note: When you apply the template, data in the Budgeted field on existing assets is replaced with data from this field. If  this field is blank, the content of the Budgeted field on existing asset records does not changed.",
            "sameAsAttribute": "BUDGETCOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification template attached to this asset template. The classification template can contain specifications (attributes), which you can edit on the asset template. Note: When you apply the template, data in the Classification field on existing assets is replaced with data from this field. Specification data associated with the classification is also replaced. However, if this field is blank, the content of the Classification field on existing asset records is not changed.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Meter Group",
            "remarks": "Identifies the meter group. All meters that belong to this meter group is associated with this asset template. You can add additional meters to this template on the Meters tab.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "The manufacturer of the asset. Enter a value or click Detail Menu to specify the manufacturer.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization the asset template belongs to.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority of the asset. You can use this field with the Priority field in Work Order Tracking (Cal). The priority of a work order is then determined on this asset relative to \"competing\" work orders. Assign the highest priority to assets you least can afford to have down. Assign the lowest priority to those assets whose repairs can wait until more important work is finished. Note: When you apply the template, data in the Priority field on existing assets is replaced with data from this field. However, if this field is blank, the content of the Priority field on existing asset records does not changed.",
            "sameAsAttribute": "PRIORITY",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PURCHASEPRICE",
            "required": false,
            "persistent": true,
            "title": "Purchase Price",
            "remarks": "The amount of the original purchase or capital cost for the asset. Note: When you apply the template, data in the Purchase Price field on existing assets is replaced with data from this field. If this field is blank, the content of the Purchase Price field on asset records does not changed.",
            "sameAsAttribute": "PURCHASEPRICE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "REPLACECOST",
            "required": false,
            "persistent": true,
            "title": "Replacement Cost",
            "remarks": "Present replacement cost for an identical asset or a substitute. Use this value to determine the trade-off costs of continued maintenance versus replacement purchase. Note: When you apply the template, data in the Replacement Cost field on existing assets is replaced with data from this field. If this field is blank, the content of the Replacement Cost field on asset records is not changed.",
            "sameAsAttribute": "REPLACECOST",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the asset template. The status values are Draft, Active, or Inactive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Asset Template",
            "remarks": "Identifies the asset template. Enter a value to identify a new asset template. This value must be unique for all asset templates.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "USAGE",
            "required": false,
            "persistent": true,
            "title": "Usage",
            "remarks": "Intended use or function of the asset. Click Select Value for a list of valid entries. Note: When you apply the template, data in the Usage field on existing assets is replaced with data from this field. If this field is blank, the content of the Usage field on existing asset records does not changed.",
            "sameAsAttribute": "USAGE",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "A description of the asset template. To enter or view additional information, click Long Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ASSETDESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Asset Description",
            "remarks": "The description of the asset record when you apply the template. Note: When you apply the template, data in the Asset Description field on existing assets is replaced with data from this field. If this field is blank, the content of the Asset Description field on existing asset records is not changed. To enter or view additional information, click  Long Description.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Identifies the site. Select a valid site and click OK.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PLUSCMODELNUM",
            "required": false,
            "persistent": true,
            "title": "Model Number",
            "remarks": "Enter the model number of the tool, if applicable. This field can be populated from the Assets (Cal) application.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "PLUSCISINHOUSECAL",
            "required": false,
            "persistent": true,
            "title": "Internal Calibration",
            "remarks": "Specifies whether the asset is calibrated internally. Click Yes if the asset is calibrated internally. Click No if the asset is calibrated externally. If neither option is selected when you apply the template to existing assets, the information in the existing asset remains unchanged. If neither option is selected when you generate new assets using the template, No is selected by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTE",
            "required": false,
            "persistent": true,
            "title": "Is M&TE",
            "remarks": "Specifies whether the asset is measuring and test equipment (M&TE). Click Yes if the asset is measuring and test equipment (M&TE).  Click No  if the asset is not measuring and test equipment (M&TE). If neither option is selected when you apply the template to existing assets, the information in the existing asset remains unchanged. If neither option is selected when you generate new assets using the template, No is selected by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISMTECLASS",
            "required": false,
            "persistent": true,
            "title": "M&TE Classification",
            "remarks": "Classifies the measuring and test equipment (M&TE). If the asset is identified as M&TE, specify a classification.",
            "sameAsAttribute": "PLUSCISMTECLASS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCISCONTAM",
            "required": false,
            "persistent": true,
            "title": "Is Contaminated",
            "remarks": "Indicates if the tool is contaminated. Click Yes if the tool is contaminated and enter a description of the contamination in the Is Contaminated Description field. If neither option is selected when you apply the template to existing assets, the information in the existing asset remains unchanged. If neither option is selected when you generate new assets using the template, No is selected by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISCONDESC",
            "required": false,
            "persistent": true,
            "title": "Is Contaminated Description",
            "remarks": "A description of the contaminated tool. If the tool is contaminated, enter a description of the contamination in the Is Contaminated Description field.",
            "sameAsAttribute": "PLUSCISCONDESC",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCASSETDEPT",
            "required": false,
            "persistent": true,
            "title": "Asset Department",
            "remarks": "Enter an asset department or click Select Value to specify from the list.",
            "sameAsAttribute": "PLUSCASSETDEPT",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCCLASS",
            "required": false,
            "persistent": true,
            "title": "Class",
            "remarks": "Enter a value or click Select Value to specify an asset classification for the tool.",
            "sameAsAttribute": "PLUSCCLASS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGEFROM",
            "required": false,
            "persistent": true,
            "title": "Operating Range From",
            "remarks": "Enter the minimum numeric value of the operating range of the tool. This field is used with the Operating Range To field. Specify the engineering units for the Operating Range values in the Units field.",
            "sameAsAttribute": "PLUSCOPRGEFROM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGETO",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "Enter the maximum numeric value of the operating range of the tool. This field is used with the Operating Range From field. Specify the engineering units for the Operating Range values in the Units field.",
            "sameAsAttribute": "PLUSCOPRGETO",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGEEU",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "Enter the engineering units for the Operating Range values or click Select Value to specify a unit from the list.",
            "sameAsAttribute": "PLUSCOPRGEEU",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMEU",
            "required": false,
            "persistent": true,
            "title": "Accuracy EU",
            "remarks": "This field is summed with the %Span, %URV, and %Reading EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMEU",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMSPAN",
            "required": false,
            "persistent": true,
            "title": "%SPAN",
            "remarks": "This field is summed with the %Reading, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMSPAN",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMURV",
            "required": false,
            "persistent": true,
            "title": "%URV",
            "remarks": "This field is summed with the %Span, %Reading, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMURV",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMREAD",
            "required": false,
            "persistent": true,
            "title": "% READING",
            "remarks": "This field is summed with the %Span, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMREAD",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMDIR",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "Enter the direction of the accuracy fields (%Span, %URV, and %Reading). Valid entries are  +, -, and +/-.",
            "sameAsAttribute": "PLUSCSUMDIR",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Item",
            "remarks": "The inventory Item Number. Click Detail Menu to view items by classification or availability.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": true,
            "title": "Vendor",
            "remarks": "The vendor associated with the asset. Click Detail Menu to specify the vendor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ITEMTYPE",
            "required": false,
            "persistent": true,
            "title": "Item Type",
            "remarks": "The item type of the rotating asset.",
            "sameAsAttribute": "ITEMTYPE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLUSCTEMPLATEID",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
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
            "attributeName": "ASSETDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Asset Description Long description",
            "remarks": "Long Description for Asset Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCISCONDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Is Contaminated Description Long description",
            "remarks": "Long Description for Is Contaminated Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCALIBRATION",
            "required": true,
            "persistent": true,
            "title": "Calibration",
            "remarks": "Determines whether an asset is calibrated. If you select this checkbox, the calibration details are available. Specify the calibration details for the asset.",
            "sameAsAttribute": "ISCALIBRATION",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Accuracy EU",
            "remarks": "This field is summed with the %Span, %URV, and %Reading EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMEU",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%SPAN",
            "remarks": "This field is summed with the %Reading, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMSPAN",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV",
            "remarks": "This field is summed with the %Span, %Reading, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMURV",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCSUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "% READING",
            "remarks": "This field is summed with the %Span, %URV, and Accuracy EU fields to obtain the total accuracy of the asset.",
            "sameAsAttribute": "PLUSCSUMREAD",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Operating Range From",
            "remarks": "Enter the minimum numeric value of the operating range of the tool. This field is used with the Operating Range To field. Specify the engineering units for the Operating Range values in the Units field.",
            "sameAsAttribute": "PLUSCOPRGEFROM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "PLUSCOPRGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "Enter the maximum numeric value of the operating range of the tool. This field is used with the Operating Range From field. Specify the engineering units for the Operating Range values in the Units field.",
            "sameAsAttribute": "PLUSCOPRGETO",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCASSETMODEL",
            "target": "ALNDOMAIN",
            "remarks": "description of specified pluscmodel attribute",
            "whereClause": "domainid = 'PLUSCASSETMODEL' and value = :PLUSCMODEL",
            "cardinality": null
        },
        {
            "name": "PLUSCCONDITION",
            "target": "ALNDOMAIN",
            "remarks": "description of specified plusccondition attribute",
            "whereClause": "domainid = 'PLUSCCONDITION' and value = :PLUSCCONDITION",
            "cardinality": null
        },
        {
            "name": "USAGE",
            "target": "ALNDOMAIN",
            "remarks": "description of specified usage attribute",
            "whereClause": "domainid = 'USAGE' and value = :USAGE",
            "cardinality": null
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (plusctemplate.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "relationship to the classspec table (classspec.classstructureid = plusctemplate.classstructureid",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the Classstructure table (classstructure.classstructureid = plusctemplate.classtructureid",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": null
        },
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table (companies.company = plusctemplate.vendor)",
            "whereClause": "company = :vendor and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "MANUFACTURER",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table (companies.company = plusctemplate.manufacturer)",
            "whereClause": "company = :manufacturer and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PLUSCDEPSCHEDULE",
            "target": "DEPRECIATION",
            "remarks": "Relationship to the Depreciation table, used to find all depreciatin schedule records for a given asset template. (plusctemplate.orgid=depreciation.orgid and plusctemplate.templateid=depreciation.templateid). The resulting set will contain zero or more objects.",
            "whereClause": "orgid=:orgid and templateid=:templateid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to allow attachments for plusctemplate",
            "whereClause": "ownertable = 'PLUSCTEMPLATE' and ownerid=:plusctemplateid",
            "cardinality": null
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "relationship to the item table (plusctemplate.itemnum = item.itemnum",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "ITEMORGINFOSTATUS",
            "target": "ITEMORGINFO",
            "remarks": "Relationship to the ItemOrgInfo table, used to find an itemorg record for a given asset.(itemorginfo.itemnum = asset.itemnum and itemorginfo.itemsetid = asset.itemsetid and itemorginfo.orgid = asset.orgid and itemorginfo.status in ('ACTIVE', 'PLANNING', 'PENDOBS')). The resulting set will contain zero or one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid and status in (select value from synonymdomain where domainid = 'ITEMSTATUS' and maxvalue in ('ACTIVE', 'PLANNING', 'PENDOBS') )",
            "cardinality": null
        },
        {
            "name": "LANGUAGE",
            "target": "LANGUAGE",
            "remarks": "Relationship to the Maximo Language table (language.maxlangcode = plusctemplate.langcode",
            "whereClause": "maxlangcode = :langcode",
            "cardinality": null
        },
        {
            "name": "METERGROUP",
            "target": "METERGROUP",
            "remarks": "relationship to the metergroup table (plusctemplate.groupname = metergroup.groupname",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        },
        {
            "name": "PLUSCTMPLTCHSTAT",
            "target": "PLUSCTMPLTCHSTAT",
            "remarks": "Relationship to the non-persistent PlusCAssetTemplateChgStatus table. PlusCAssetTemplateChgStatus is a non-persistent MBO with whose help the dialog box binds with the object",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PLUSCTMPLTSTATUS",
            "target": "PLUSCTMPLTSTATUS",
            "remarks": "Asset Template Status History",
            "whereClause": "templateid = :templateid",
            "cardinality": null
        },
        {
            "name": "PLUSCTPASSET",
            "target": "PLUSCTPASSET",
            "remarks": "Relationship between PLUSCTPASSET and PLUSCTEMPLATE",
            "whereClause": "templateid=:templateid and (orgid=:orgid or orgid is null)",
            "cardinality": null
        },
        {
            "name": "PLUSCTPDATASHEET",
            "target": "PLUSCTPDATASHEET",
            "remarks": "Relationship from PLUSCTEMPLATE TO PLUSCTPDATASHEET",
            "whereClause": "templateid =:templateid and orgid =:orgid ",
            "cardinality": null
        },
        {
            "name": "PLUSCTPMASTERPM",
            "target": "PLUSCTPMASTERPM",
            "remarks": "relationship to the plusctpmasterpm table (plusctpmasterpm.templateid = plusctemplate.templateid and plusctpmasterpm.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PLUSCTPMETERWITHMETERNAME",
            "target": "PLUSCTPMETER",
            "remarks": "Relationship to PLUSCTPMETER table",
            "whereClause": "metername = :pluscdepmeter and orgid = :orgid and templateid = :templateid",
            "cardinality": null
        },
        {
            "name": "PLUSCTMPLTMETER",
            "target": "PLUSCTPMETER",
            "remarks": "relationship to the plusctpmeter table (plusctpmeter.templateid = plusctemplate.templateid and plusctpmeter.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PLUSCTPSPAREPART",
            "target": "PLUSCTPSPAREPART",
            "remarks": "relationship to the spare part table (plusctpsparepart.templateid = plusctemplate.templateid and plusctpsparepart.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "PLUSCTPSPEC",
            "target": "PLUSCTPSPEC",
            "remarks": "relationship to the plusctpspec table (plusctpspec.templateid = plusctemplate.templateid and plusctpspec.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to SITE table",
            "whereClause": "siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCTPSTATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status",
            "whereClause": "domainid = 'PLUSCTPSTATUS' and value = :status",
            "cardinality": null
        },
        {
            "name": "ASSETTYPE",
            "target": "SYNONYMDOMAIN",
            "remarks": "description of specified asset type attribute",
            "whereClause": "domainid = 'ASSETTYPE' and value = :assettype",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}