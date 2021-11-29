mos = {
    "objectName": "TOOLITEM",
    "className": "psdi.app.item.ToolItemSet",
    "description": "Tool Items View of ITEM",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [
        "ITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "TOOLITEM",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITY, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity",
            "longDescription": null
        },
        {
            "objectName": "COMMODITIES",
            "targetObject": "TOOLITEM",
            "parentKeys": "COMMODITY, ITEMSETID",
            "targetKeys": "COMMODITYGROUP, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Commodity Group",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "TOOLITEM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "TOOLITEM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "TOOLITEM",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "TOOLITEM",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLITEM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Identifies the tool record. This value must be unique for all tool records. Click the Detail Menu button to view tools by classification or availability.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMNUM",
            "tableName": "ITEM",
            "tableColumnName": "ITEMNUM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes or names the tool. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM",
            "viewColumnName": "DESCRIPTION",
            "tableName": "ITEM",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "ROTATING",
            "required": true,
            "persistent": true,
            "title": "Rotating",
            "remarks": "Specifies whether the tool is a rotating asset. If the check box is selected, the tool becomes an asset tracked by tool number and individual asset number. If the check box is cleared (the default), the tool is not tracked as an individual asset.",
            "sameAsAttribute": "ROTATING",
            "sameAsObject": "ITEM",
            "viewColumnName": "ROTATING",
            "tableName": "ITEM",
            "tableColumnName": "ROTATING"
        },
        {
            "attributeName": "LOTTYPE",
            "required": true,
            "persistent": true,
            "title": "Lot Type",
            "remarks": "Specifies whether the tool is tracked by lot (LOT) or not (NOLOT). LOT is used for a tool that is lotted, typically has an expiration date, and is able to be assigned lot numbers upon receipt. NOLOT means that the tool does not need to be tracked by lots. Click the Select Value button to choose a lot type.",
            "sameAsAttribute": "LOTTYPE",
            "sameAsObject": "ITEM",
            "viewColumnName": "LOTTYPE",
            "tableName": "ITEM",
            "tableColumnName": "LOTTYPE"
        },
        {
            "attributeName": "CAPITALIZED",
            "required": true,
            "persistent": true,
            "title": "Capitalized",
            "remarks": "Specifies whether the tool is to be financially accounted for as a capitalized cost or a non-capitalized cost. In Maximo, all tools are tracked as capitalized costs.",
            "sameAsAttribute": "CAPITALIZED",
            "sameAsObject": "ITEM",
            "viewColumnName": "CAPITALIZED",
            "tableName": "ITEM",
            "tableColumnName": "CAPITALIZED"
        },
        {
            "attributeName": "MSDSNUM",
            "required": false,
            "persistent": true,
            "title": "MSDS",
            "remarks": "Material Safety Data Sheet number issued by the Occupational Safety and Health Association (OSHA). The Material Safety Data Sheet (MSDS), which describes product dangers, must be available to purchasers and users of commercial quantities of all hazardous materials.",
            "sameAsAttribute": "MSDSNUM",
            "sameAsObject": "ITEM",
            "viewColumnName": "MSDSNUM",
            "tableName": "ITEM",
            "tableColumnName": "MSDSNUM"
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": true,
            "title": "Outside",
            "remarks": "Specifies whether the tool is a consignment good. If the check box is selected, the tool belongs to a contractor (or vendor), but it is stored on-site, and it is a tool for which you expect to be charged for its use. If the check box is cleared (the default), the tool is not owned by an outside party.",
            "sameAsAttribute": "OUTSIDE",
            "sameAsObject": "ITEM",
            "viewColumnName": "OUTSIDE",
            "tableName": "ITEM",
            "tableColumnName": "OUTSIDE"
        },
        {
            "attributeName": "IN19",
            "required": false,
            "persistent": true,
            "title": "Extra Field 19",
            "remarks": "Extra Field 19",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN19",
            "tableName": "ITEM",
            "tableColumnName": "IN19"
        },
        {
            "attributeName": "IN20",
            "required": false,
            "persistent": true,
            "title": "Extra Field 20",
            "remarks": "Extra Field 20",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN20",
            "tableName": "ITEM",
            "tableColumnName": "IN20"
        },
        {
            "attributeName": "IN21",
            "required": false,
            "persistent": true,
            "title": "Extra Field 21",
            "remarks": "Extra Field 21",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN21",
            "tableName": "ITEM",
            "tableColumnName": "IN21"
        },
        {
            "attributeName": "IN22",
            "required": false,
            "persistent": true,
            "title": "Extra Field 22",
            "remarks": "Extra Field 22",
            "sameAsAttribute": "IN22",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN22",
            "tableName": "ITEM",
            "tableColumnName": "IN22"
        },
        {
            "attributeName": "IN23",
            "required": false,
            "persistent": true,
            "title": "Extra Field 23",
            "remarks": "Extra Field 23",
            "sameAsAttribute": "IN23",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN23",
            "tableName": "ITEM",
            "tableColumnName": "IN23"
        },
        {
            "attributeName": "SPAREPARTAUTOADD",
            "required": true,
            "persistent": true,
            "title": "Automatically Add as Spare",
            "remarks": "Indicates that the item is eligible to be added automatically as a spare part.",
            "sameAsAttribute": "SPAREPARTAUTOADD",
            "sameAsObject": "ITEM",
            "viewColumnName": "SPAREPARTAUTOADD",
            "tableName": "ITEM",
            "tableColumnName": "SPAREPARTAUTOADD"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE",
            "viewColumnName": "CLASSSTRUCTUREID",
            "tableName": "ITEM",
            "tableColumnName": "CLASSSTRUCTUREID"
        },
        {
            "attributeName": "INSPECTIONREQUIRED",
            "required": true,
            "persistent": true,
            "title": "Inspect on Receipt",
            "remarks": "Specifies whether the tool should be held out of inventory when being received, until the purchase order receipt has been approved. If the check box is selected, the tool cannot be received until it has been inspected. If the check box is cleared (the default), the tool can be received without an inspection.",
            "sameAsAttribute": "INSPECTIONREQUIRED",
            "sameAsObject": "ITEM",
            "viewColumnName": "INSPECTIONREQUIRED",
            "tableName": "ITEM",
            "tableColumnName": "INSPECTIONREQUIRED"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB",
            "viewColumnName": "SOURCESYSID",
            "tableName": "ITEM",
            "tableColumnName": "SOURCESYSID"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB",
            "viewColumnName": "OWNERSYSID",
            "tableName": "ITEM",
            "tableColumnName": "OWNERSYSID"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": "EXTERNALREFID",
            "sameAsObject": "ITEM",
            "viewColumnName": "EXTERNALREFID",
            "tableName": "ITEM",
            "tableColumnName": "EXTERNALREFID"
        },
        {
            "attributeName": "IN24",
            "required": false,
            "persistent": true,
            "title": "IN24",
            "remarks": "Extra Field 24",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN24",
            "tableName": "ITEM",
            "tableColumnName": "IN24"
        },
        {
            "attributeName": "IN25",
            "required": false,
            "persistent": true,
            "title": "IN25",
            "remarks": "Extra Field 25",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN25",
            "tableName": "ITEM",
            "tableColumnName": "IN25"
        },
        {
            "attributeName": "IN26",
            "required": false,
            "persistent": true,
            "title": "IN26",
            "remarks": "Extra Field 26",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN26",
            "tableName": "ITEM",
            "tableColumnName": "IN26"
        },
        {
            "attributeName": "IN27",
            "required": false,
            "persistent": true,
            "title": "IN27",
            "remarks": "Extra Field 27",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM",
            "viewColumnName": "IN27",
            "tableName": "ITEM",
            "tableColumnName": "IN27"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": "SENDERSYSID",
            "sameAsObject": "ITEM",
            "viewColumnName": "SENDERSYSID",
            "tableName": "ITEM",
            "tableColumnName": "SENDERSYSID"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Identifies the item set, or group of items, to which this tool belongs. An organization is assigned to only one item set, but multiple organizations can use the same item set. Click the Select Value button to choose an item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "ITEMSETID",
            "tableName": "ITEM",
            "tableColumnName": "ITEMSETID"
        },
        {
            "attributeName": "ORDERUNIT",
            "required": false,
            "persistent": true,
            "title": "Order Unit",
            "remarks": "Order unit used to create inventory records.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT",
            "viewColumnName": "ORDERUNIT",
            "tableName": "ITEM",
            "tableColumnName": "ORDERUNIT"
        },
        {
            "attributeName": "ISSUEUNIT",
            "required": false,
            "persistent": true,
            "title": "Issue Unit",
            "remarks": "Unit of measure used to issue the tool from the storeroom, such as EACH or ROLL. Click the Select Value button to choose an issue unit.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT",
            "viewColumnName": "ISSUEUNIT",
            "tableName": "ITEM",
            "tableColumnName": "ISSUEUNIT"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Item Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEM_DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of this item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEM_ID",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Inventory item number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "SITEID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "HASIAS",
            "required": true,
            "persistent": false,
            "title": "Rotating",
            "remarks": "HASIAS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTANCE",
            "required": false,
            "persistent": false,
            "title": "Instance",
            "remarks": "INSTANCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONDITIONENABLED",
            "required": true,
            "persistent": true,
            "title": "Condition Enabled",
            "remarks": "Is this item condition enabled?",
            "sameAsAttribute": "CONDITIONENABLED",
            "sameAsObject": "ITEM",
            "viewColumnName": "CONDITIONENABLED",
            "tableName": "ITEM",
            "tableColumnName": "CONDITIONENABLED"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Meter Group",
            "remarks": "Meter group for the item. This attribute pertains to rotating tools only. Click the Detail Menu button to select a meter group or go to the Meter Groups application to create one.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP",
            "viewColumnName": "GROUPNAME",
            "tableName": "ITEM",
            "tableColumnName": "GROUPNAME"
        },
        {
            "attributeName": "METERNAME",
            "required": false,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter associated with the tool. This is the meter for which a reading is to be recorded when this tool is issued to an asset. Only non-rotating tools can be associated with a meter. Click the Detail Menu button to select a meter or go to the Meters application to create one.",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER",
            "viewColumnName": "METERNAME",
            "tableName": "ITEM",
            "tableColumnName": "METERNAME"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": true,
            "title": "Commodity Group",
            "remarks": "Group of commodities to which this tool belongs. Click the Select Value button to choose a commodity group.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITYGROUP",
            "tableName": "ITEM",
            "tableColumnName": "COMMODITYGROUP"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": true,
            "title": "Commodity Code",
            "remarks": "Commodity code identifying the category of tool. Click the Select Value button to choose a commodity code.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES",
            "viewColumnName": "COMMODITY",
            "tableName": "ITEM",
            "tableColumnName": "COMMODITY"
        },
        {
            "attributeName": "ITEMTYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Item Type",
            "sameAsAttribute": "ITEMTYPE",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMTYPE",
            "tableName": "ITEM",
            "tableColumnName": "ITEMTYPE"
        },
        {
            "attributeName": "PRORATE",
            "required": true,
            "persistent": true,
            "title": "Prorate Service",
            "remarks": "Prorate Service?",
            "sameAsAttribute": "PRORATE",
            "sameAsObject": "ITEM",
            "viewColumnName": "PRORATE",
            "tableName": "ITEM",
            "tableColumnName": "PRORATE"
        },
        {
            "attributeName": "ITEMID",
            "required": false,
            "persistent": true,
            "title": "ITEMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "ITEMID",
            "sameAsObject": "ITEM",
            "viewColumnName": "ITEMID",
            "tableName": "ITEM",
            "tableColumnName": "ITEMID"
        },
        {
            "attributeName": "ISKIT",
            "required": true,
            "persistent": true,
            "title": "Kit",
            "remarks": "is this item a kit, or collection of items defined in the ItemStruct table",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "ISKIT",
            "tableName": "ITEM",
            "tableColumnName": "ISKIT"
        },
        {
            "attributeName": "KITCOMPONENTTOADDTOSTORE",
            "required": true,
            "persistent": false,
            "title": "Is Kit Component to Be Added to Store",
            "remarks": "non-persistent attribute used when adding the kit to which this item belongs to a storeroom.",
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
            "sameAsObject": "LANGUAGE",
            "viewColumnName": "LANGCODE",
            "tableName": "ITEM",
            "tableColumnName": "LANGCODE"
        },
        {
            "attributeName": "ATTACHONISSUE",
            "required": true,
            "persistent": true,
            "title": "Attach to Parent Asset on Issue",
            "remarks": "Attach to parent asset on issue",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "ATTACHONISSUE",
            "tableName": "ITEM",
            "tableColumnName": "ATTACHONISSUE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "HASLD",
            "tableName": "ITEM",
            "tableColumnName": "HASLD"
        },
        {
            "attributeName": "MAXISSUE",
            "required": false,
            "persistent": true,
            "title": "Maximum Quantity Issued",
            "remarks": "Total maximum quantity that can be issued to an asset.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "MAXISSUE",
            "tableName": "ITEM",
            "tableColumnName": "MAXISSUE"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "The current status of the item such as ACTIVE, PENDING, PLANNING, PENDOBS and OBSELETE.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "STATUS",
            "tableName": "ITEM",
            "tableColumnName": "STATUS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the work order status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "STATUSDATE",
            "tableName": "ITEM",
            "tableColumnName": "STATUSDATE"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "Hierarchy Path",
            "remarks": "Sets value to HIERARCHYPATH, if the item has an associated CLASSSTRUCTURE record",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
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
            "attributeName": "NP_STATUSROLLDOWN",
            "required": true,
            "persistent": false,
            "title": "Roll New Status to Organizations and Inventory",
            "remarks": "Roll New Status to Organizations and Inventory, temporary non-persistent field used by MEA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HARDRESISSUE",
            "required": true,
            "persistent": true,
            "title": "Requires hard reservation on use",
            "remarks": "Indicates whether a hard reservation must be referenced when the item is issued from a storeroom.",
            "sameAsAttribute": "HARDRESISSUE",
            "sameAsObject": "ITEM",
            "viewColumnName": "HARDRESISSUE",
            "tableName": "ITEM",
            "tableColumnName": "HARDRESISSUE"
        },
        {
            "attributeName": "TAXEXEMPT",
            "required": true,
            "persistent": true,
            "title": "Tax Exempt",
            "remarks": "Select this check box if the item, the tool, or the service is not taxable. The buyer for your organization determines the tax-exempt status of items, of tools, and of services.",
            "sameAsAttribute": "TAXEXEMPT",
            "sameAsObject": "ITEM",
            "viewColumnName": "TAXEXEMPT",
            "tableName": "ITEM",
            "tableColumnName": "TAXEXEMPT"
        },
        {
            "attributeName": "RECEIPTTOLERANCE",
            "required": false,
            "persistent": true,
            "title": "Receipt Tolerance %",
            "remarks": "The percentage value of items that can be received over the amount set in the initial agreement.",
            "sameAsAttribute": "RECEIPTTOLERANCE",
            "sameAsObject": "ITEM",
            "viewColumnName": "RECEIPTTOLERANCE",
            "tableName": "ITEM",
            "tableColumnName": "RECEIPTTOLERANCE"
        },
        {
            "attributeName": "PLUSCISINHOUSECAL",
            "required": true,
            "persistent": true,
            "title": "Internal Calibration",
            "remarks": "When selected, indicates that this tool is calibrated in house. This field can be used to sort tools that are calibrated internally or externally.",
            "sameAsAttribute": "PLUSCISINHOUSECAL",
            "sameAsObject": "ITEM",
            "viewColumnName": "PLUSCISINHOUSECAL",
            "tableName": "ITEM",
            "tableColumnName": "PLUSCISINHOUSECAL"
        },
        {
            "attributeName": "PLUSCISMTE",
            "required": true,
            "persistent": true,
            "title": "Is M&TE",
            "remarks": "Defines whether a Tool is a standard used for measuring and testing equipment.",
            "sameAsAttribute": "PLUSCISMTE",
            "sameAsObject": "ITEM",
            "viewColumnName": "PLUSCISMTE",
            "tableName": "ITEM",
            "tableColumnName": "PLUSCISMTE"
        },
        {
            "attributeName": "PLUSCISMTECLASS",
            "required": false,
            "persistent": true,
            "title": "M&TE Classification",
            "remarks": "When the Is M&TE? field is checked then you have the option to choose a classification for M&TE.",
            "sameAsAttribute": "PLUSCISMTECLASS",
            "sameAsObject": "ITEM",
            "viewColumnName": "PLUSCISMTECLASS",
            "tableName": "ITEM",
            "tableColumnName": "PLUSCISMTECLASS"
        },
        {
            "attributeName": "PLUSCSOLUTION",
            "required": true,
            "persistent": true,
            "title": "Buffer Solution",
            "remarks": "Buffer Solution Flag",
            "sameAsAttribute": "PLUSCSOLUTION",
            "sameAsObject": "ITEM",
            "viewColumnName": "PLUSCSOLUTION",
            "tableName": "ITEM",
            "tableColumnName": "PLUSCSOLUTION"
        },
        {
            "attributeName": "ISCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Specifies whether the tool can be used in Crew applications and Work Order Tracking applications. If the check box is selected, the tool can be used. If the check box is cleared, the tool cannot be used.",
            "sameAsAttribute": "ISCREW",
            "sameAsObject": "ITEM",
            "viewColumnName": "ISCREW",
            "tableName": "ITEM",
            "tableColumnName": "ISCREW"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "itemtype  in (select value from synonymdomain where domainid = 'ITEMTYPE'  and maxvalue = 'TOOL')"
    },
    "outgoingRelationships": [
        {
            "name": "ALTITEM",
            "target": "ALTITEM",
            "remarks": "Tool Report Object Structure",
            "whereClause": "itemsetid=:itemsetid and itemnum=:itemnum",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (toolitem.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all document records for a given tool. (doclinks.keytable = 'TOOL' and doclinks.keycolumn = 'TOOLNUM' and doclinks.keyvalue = tool.toolnum$DOCLINKS.KEYVALUE and doclinks.orgid = tool.orgid). The resulting set will contain zero or more objects. Note: The Tool.ToolNum field value will be formatted to match the DocLinks.KeyValue data type.",
            "whereClause": "(ownertable ='TOOLITEM' and ownerid = :itemid) or (ownertable ='QUALIFICATION' and ownerid in (select qualificationuid from qualification where qualificationid in (select qualificationid from toolqual where itemnum=:itemnum and itemsetid=:itemsetid)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given item. (imglib.refobject='ITEM' and imglib.refobjectid=:item$TOOLITEM.ITEMID). The resulting set will contain zero or one object.",
            "whereClause": "refobject = 'ITEM' and refobjectid = :itemid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCTLASSETSLINK",
            "target": "PLUSCDSASSETLINK",
            "remarks": "Relationship from toolitem to pluscdsassetslink",
            "whereClause": "itemnum=:itemnum and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR'))",
            "cardinality": null
        },
        {
            "name": "PLUSCFILTER",
            "target": "PLUSCFILTER",
            "remarks": "Relationship for the filter",
            "whereClause": "itemnum = :itemnum",
            "cardinality": null
        },
        {
            "name": "PLUSCTLORIGTL",
            "target": "TOOLITEM",
            "remarks": "all toolitems that have parent as alternate",
            "whereClause": "itemnum in (select itemnum from altitem where altitemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "target": "TOOLQUAL",
            "remarks": "Tool Report Object Structure",
            "whereClause": "itemsetid=:itemsetid and itemnum=:itemnum",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TOOLITEM",
            "source": "ASSET",
            "remarks": null,
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "TOOLITEM",
            "source": "TOOLINV",
            "remarks": "Relationship to TOOLITEM",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "PLUSCTLORIGTL",
            "source": "TOOLITEM",
            "remarks": "all toolitems that have parent as alternate",
            "whereClause": "itemnum in (select itemnum from altitem where altitemnum = :itemnum and itemsetid = :itemsetid)",
            "cardinality": null
        },
        {
            "name": "TOOLITEM",
            "source": "TOOLTRANS",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemsetid=:itemsetid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLITEM",
            "source": "WPTOOL",
            "remarks": "Relationship to the Tool(Item) table, used to find the tool(item) for a given work plan tool. (itemnum=:itemnum and itemsetid=:itemsetid). This resulting set will contain one object.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        }
    ]
}