mos = {
    "objectName": "TOOLTRANS",
    "className": "psdi.app.tool.ToolTransSet",
    "description": "The TOOLTRANS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TOOLTRANSID",
    "primaryKeyColumns": [
        "SITEID",
        "ITEMNUM",
        "TOOLTRANSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ROTASSETSITE, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 156",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "ROTASSETSITE, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 157",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 158",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ROTASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "COMPANIES",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, COMPANY",
            "targetKeys": "ORGID, PLUSCMANUFACTURER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Manufacturer on Tool Transaction",
            "longDescription": null
        },
        {
            "objectName": "FINANCIALPERIODS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, FINANCIALPERIOD",
            "targetKeys": "ORGID, FINANCIALPERIOD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Period",
            "longDescription": null
        },
        {
            "objectName": "FINCNTRL",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID, FINCNTRLID",
            "targetKeys": "ORGID, FINCNTRLID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Financial Control",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "TOOLTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "PLUSCLOTNUM, ITEMNUM, LOCATION, ROTASSETSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "INVLOT",
            "targetObject": "TOOLTRANS",
            "parentKeys": "LOTNUM, ITEMNUM, LOCATION, SITEID",
            "targetKeys": "PLUSCLOTNUM, ITEMNUM, LOCATION, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Lot",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "TOOLTRANS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ROTASSETSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tool Transaction Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TOOLTRANS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TOOLTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who entered the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "TOOLTRANS",
            "parentKeys": "PERSONID",
            "targetKeys": "PLUSCTECHNICIAN",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "ROTASSETSITE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 278",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "ROTASSETSITE, REFWO",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, REFWO",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Actual Tool Usage",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TRANSDATE",
            "required": true,
            "persistent": true,
            "title": "Transaction Date",
            "remarks": "Timestamp - Key To Table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLRATE",
            "required": true,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate per hour for the tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifies the asset on which work was done.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TOOLQTY",
            "required": true,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Quantity of the tool used on the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLHRS",
            "required": true,
            "persistent": true,
            "title": "Tool Hours",
            "remarks": "Number of hours the tool was used on the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "Date the tool use information was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Person who entered the tool information. Once the work order is approved, you can modify the field until the record is saved.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Specifies whether the tool is supplied by an outside vendor. If the check box is cleared (the default), the tool is internal. If the check box is selected, the tool is supplied by an outside vendor.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLLUP",
            "required": true,
            "persistent": true,
            "title": "Rolled Up",
            "remarks": "Indicates whether this transaction has been rolled up.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Debit Account",
            "remarks": "General Ledger account to debit for the cost of the tool. The default value can come from the work order's GL account (which may have defaulted from an associated PM), the tool GL account, or both. The work order must be approved before you can insert a value in this field. You can modify this field until you save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINECOST",
            "required": true,
            "persistent": true,
            "title": "Line Cost",
            "remarks": "Actual cost of the tool for the operation. Maximo calculates this using the following formula: Quantity x (hours) x (rate).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": true,
            "title": "GL Credit Account",
            "remarks": "General Ledger account to credit for the cost of the tool. The default value is the control account for the tool. The work order must be approved before you can insert or edit the value.You can modify this field until you save the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": true,
            "title": "Financial Period",
            "remarks": "Financial period in a format corresponding to that required by the accounting system.",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Identifies the location of the asset or the location where work was done.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": true,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": true,
            "title": "Secondary Line Cost",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": true,
            "title": "FCID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": true,
            "title": "Entered as Task",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "TASKID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "WONUM",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which the tool was used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLTRANSID",
            "required": true,
            "persistent": true,
            "title": "TOOLTRANSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FCPROJECTID",
            "required": false,
            "persistent": false,
            "title": "FC Project ID",
            "remarks": "Financial control project identifier.",
            "sameAsAttribute": "PROJECTID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "FCTASKID",
            "required": false,
            "persistent": false,
            "title": "FC Task ID",
            "remarks": "Financial control task identifier.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Identifies the tool used for the work.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset on which work was done.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set Id",
            "remarks": "Item Set Identifier",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "ROTASSETSITE",
            "required": false,
            "persistent": true,
            "title": "Rotating Equipment Site ID",
            "remarks": "Rotating Equipment Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source MBO",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PLUSCCOMMENT",
            "required": false,
            "persistent": true,
            "title": "Tool Comment Field",
            "remarks": "Enter a comment about the tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDUEDATE",
            "required": false,
            "persistent": true,
            "title": "Due Date",
            "remarks": "Plus Cal - Tool Due Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEXPIRYDATE",
            "required": false,
            "persistent": true,
            "title": "Expiry Date",
            "remarks": "Enter an expiry date for the solution used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCLOTNUM",
            "required": false,
            "persistent": true,
            "title": "Manufacturer Lot",
            "remarks": "Enter the lot number that the solution came from.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "PLUSCMANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer of the Buffer Solution",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "PLUSCTECHNICIAN",
            "required": false,
            "persistent": true,
            "title": "Qualified Technician",
            "remarks": "Qualified Technician",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PLUSCTOOLUSEDATE",
            "required": false,
            "persistent": true,
            "title": "PLUSCTOOLUSEDATE",
            "remarks": "The date on which this tool was actually used to perform work on this workorder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of Buffer Solution",
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
            "attributeName": "PLUSCCOMMENT_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Tool Comment Field Long description",
            "remarks": "Long Description for Tool Comment Field",
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
            "attributeName": "AMCREW",
            "required": false,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identifies the crew that performed the work.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "TOOLSQ",
            "required": false,
            "persistent": true,
            "title": "Tool Sequence",
            "remarks": "Tool Sequence.",
            "sameAsAttribute": "TOOLSEQ",
            "sameAsObject": "AMCTTOOL"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the asset record for the given tool transaction. (asset.assetnum = tooltrans.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the TOOLTRANS to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMORGINFO",
            "target": "ITEMORGINFO",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationshipt to the labor table to get the labor for the given tooltrans labor.",
            "whereClause": "laborcode=:plusctechnician and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location record for the given tool transaction. (asset.assetnum = tooltrans.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLITEM",
            "target": "TOOLITEM",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemsetid=:itemsetid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the TOOLTRANS to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TOOLTRANS",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and TOOLTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "TOOLTRANS",
            "source": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOLSQ and TOOLTRANS tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and toolsq = :toolseq",
            "cardinality": null
        },
        {
            "name": "TOOLTRANSCREW",
            "source": "ASSIGNMENT",
            "remarks": "Relationship from table ASSIGNMENT to TOOLTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and refwo=:wonum",
            "cardinality": null
        },
        {
            "name": "TOOLTRANSCREWNR",
            "source": "LABTRANSENTERBY",
            "remarks": "Relationship from table LABTRANSENTERBY to TOOLTRANS with no return for Crews.",
            "whereClause": "1=2",
            "cardinality": null
        },
        {
            "name": "TOOLTRANSCREW",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship from table WMASSIGNMENT to TOOLTRANS for Crews.",
            "whereClause": "amcrew=:amcrew and refwo=:wogroup",
            "cardinality": null
        },
        {
            "name": "REP_ACTTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship that returns all actual tools for given Work Order, including the tools for the Work Order's tasks.  Used for reporting.",
            "whereClause": "(refwo=:wonum or exists (select 1 from workorder w where w.parent=:wonum and w.istask=1 and tooltrans.siteid=w.siteid and tooltrans.refwo=w.wonum)) and tooltrans.siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SHOWACTUALTOOL",
            "source": "WORKORDER",
            "remarks": "Relationship to the ShowActualTool Set used by UI for display. This is a special MboSet used for displaying the actual tool for a given workorder. (refwo in (select wonum from workorder where workorder.wonum=workorder.wonum or workorder.parent=workorder.wonum and workorder.siteid=workorder.siteid)). The resulting set will contain zero or more objects.",
            "whereClause": "refwo in (select wonum from workorder where (wonum=:wonum or (parent=:wonum and istask = :yes)) and siteid=:siteid )",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLTRANS",
            "source": "WORKORDER",
            "remarks": "Relationship to the ToolTrans table, used to find all tool transactions for a work order. (ToolTrans.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "TOOLTRANS",
            "source": "WPTOOL",
            "remarks": "Relationship to the ToolTrans table, used to find the tooltrans for a given work plan tool(item). (refwo=:wonum and itemnum=:itemnum ). This resulting set will contain zero or more objects.",
            "whereClause": "refwo=:wonum and itemnum=:itemnum and itemsetid=:itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}