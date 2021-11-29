mos = {
    "objectName": "MXRECEIPT",
    "className": "psdi.iface.app.rcv.MaxRcvMergedSet",
    "description": "Non Persistant MBO combining Matrec and servrec",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "Item that you want to transfer from this storeroom.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "To Location",
            "remarks": "Storeroom where the item is being transferred or received. Click the Select Value button to choose a storeroom location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "TRANSDATE",
            "required": false,
            "persistent": false,
            "title": "Transaction Date",
            "remarks": "Date and time the transaction was entered in Maximo. This field is read only.",
            "sameAsAttribute": "TRANSDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ACTUALDATE",
            "required": false,
            "persistent": false,
            "title": "Actual Date",
            "remarks": "Date and time of the receipt or transfer, which may be different than the time the transaction is recorded in Maximo. Maximo populates the current date and time by default. You can modify the value in this field. Click the Select Date and Time button to use the calendar control.",
            "sameAsAttribute": "ACTUALDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "RECEIVEDUNIT",
            "required": false,
            "persistent": false,
            "title": "Order Unit",
            "remarks": "Standard unit by which the item is ordered, such as roll or case.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "ISSUETYPE",
            "required": false,
            "persistent": false,
            "title": "Transaction Type",
            "remarks": "The type of Material Receipt Transaction (MatRecTrans).",
            "sameAsAttribute": "ISSUETYPE",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "ACTUALCOST",
            "required": false,
            "persistent": false,
            "title": "Actual Cost",
            "remarks": "The extended cost of the item on this transaction.",
            "sameAsAttribute": "ACTUALCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "PONUM",
            "required": false,
            "persistent": false,
            "title": "PO",
            "remarks": "Purchase order number associated with this item. Select the Detail Menu button to go to the Purchase Orders application.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "INVOICENUM",
            "required": false,
            "persistent": false,
            "title": "Invoice",
            "remarks": "Invoice number from the purchase order.",
            "sameAsAttribute": "INVOICENUM",
            "sameAsObject": "INVOICE"
        },
        {
            "attributeName": "REJECTCODE",
            "required": false,
            "persistent": false,
            "title": "Reject Code",
            "remarks": "Code that indicates the reason items were rejected. For example, Damaged.",
            "sameAsAttribute": "REJECTCODE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REJECTQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Rejected",
            "remarks": "Number of items rejected. If you enter a number in this field, make sure the number of items in the Qunatity field is the number of items you are keeping, and not the total number of items received.",
            "sameAsAttribute": "REJECTQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CONVERSION",
            "required": false,
            "persistent": false,
            "title": "Conversion Factor",
            "remarks": "Numeric value that is applied to relate an order unit to an issue unit. For example, if you order light bulbs in bulk, your unit of measure might be a case, with a quantity received of 36. But when you issue the item, you issue it one at a time. In this case, you can define a measure unit of CASE and another measure unit of EACH. You define a conversion ratio from CASE to EACH with a factor of 36. When you receive an order of this item into a storeroom, MAXIMO converts the received order unit of one CASE into the storeroom's issue unit of 36 EACH.",
            "sameAsAttribute": "CONVERSION",
            "sameAsObject": "CONVERSION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset number associated with this transaction or line item.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": false,
            "title": "Entered By",
            "remarks": "Maximo user name of the person initiating this transaction.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "IT1",
            "required": false,
            "persistent": false,
            "title": "It1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "RL1",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT2",
            "required": false,
            "persistent": false,
            "title": "It2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "RL2",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT3",
            "required": false,
            "persistent": false,
            "title": "It3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "RL3",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT4",
            "required": false,
            "persistent": false,
            "title": "It4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "RL4",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT5",
            "required": false,
            "persistent": false,
            "title": "It5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "RL5",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "OUTSIDE",
            "required": true,
            "persistent": false,
            "title": "Outside",
            "remarks": "Specifies whether the item being transferred is a consignment good. If the check box is selected, the item belongs to a contractor (or vendor), but it is stored on-site, and it is an item for which you expect to be charged for its use. If the check box is cleared (the default), the item is not owned by an outside party.",
            "sameAsAttribute": "OUTSIDE",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ISSUETO",
            "required": false,
            "persistent": false,
            "title": "Issue To",
            "remarks": "Person or craft to whom the item or tool is being transferred. Click the Detail Menu button to choose a person or go to the People application.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PACKINGSLIPNUM",
            "required": false,
            "persistent": false,
            "title": "Packing Slip",
            "remarks": "Packing slip number for the received item.",
            "sameAsAttribute": "PACKINGSLIPNUM",
            "sameAsObject": "SHIPMENTLINE"
        },
        {
            "attributeName": "POLINENUM",
            "required": false,
            "persistent": false,
            "title": "PO Line",
            "remarks": "Line number of the item on the associated purchase order.",
            "sameAsAttribute": "PRLINENUM",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ISSUE",
            "required": true,
            "persistent": false,
            "title": "Issue on Receipt",
            "remarks": "Specifies whether the line item is a direct issue to a work order, GL account, location, or asset. If the check box is selected, the line item is a direct issue. If the check box is cleared (the default), the item is stocked in a storeroom.",
            "sameAsAttribute": "ISSUE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REQUESTEDBY",
            "required": false,
            "persistent": false,
            "title": "Requested By",
            "remarks": "Person who asked for the item.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "TOTALCURBAL",
            "required": false,
            "persistent": false,
            "title": "Total Current Balance",
            "remarks": "Total Current Balance",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "OLDAVGCOST",
            "required": false,
            "persistent": false,
            "title": "Old Average Cost",
            "remarks": "Old Average Cost",
            "sameAsAttribute": "OLDAVGCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ITIN1",
            "required": false,
            "persistent": false,
            "title": "Itin1",
            "remarks": "Extra Field #6",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN2",
            "required": false,
            "persistent": false,
            "title": "Itin2",
            "remarks": "Extra Field #7",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN3",
            "required": false,
            "persistent": false,
            "title": "Itin3",
            "remarks": "Extra Field #8",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TOBIN",
            "required": false,
            "persistent": false,
            "title": "To Bin",
            "remarks": "Bin number in the storeroom for the received or transferred item. Click the Select Value button to choose a bin.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "GL account being debited when the item is received or transferred. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": "GLDEBITACCT",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "GLCREDITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Credit Account",
            "remarks": "GL account being credited when the item is transferred. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": "GLCREDITACCT",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "FINANCIALPERIOD",
            "required": false,
            "persistent": false,
            "title": "Financial Period",
            "remarks": "Financial Period of transaction",
            "sameAsAttribute": "FINANCIALPERIOD",
            "sameAsObject": "FINANCIALPERIODS"
        },
        {
            "attributeName": "CURRENCYCODE",
            "required": true,
            "persistent": false,
            "title": "Currency",
            "remarks": "Currency the PR is in.",
            "sameAsAttribute": "CURRENCYCODE",
            "sameAsObject": "CURRENCY"
        },
        {
            "attributeName": "EXCHANGERATE",
            "required": false,
            "persistent": false,
            "title": "Exchange Rate",
            "remarks": "Exchange rate at time of PR approval.",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "CURRENCYUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Currency Unit Cost",
            "remarks": "Unit Cost in vendor currency.",
            "sameAsAttribute": "CURRENCYUNITCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": false,
            "title": "Manufacturer",
            "remarks": "Identifying code for the manufacturer of the item.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "MODELNUM",
            "required": false,
            "persistent": false,
            "title": "Model",
            "remarks": "Manufacturer's model number for the item. The default value comes from the inventory record.",
            "sameAsAttribute": "MODELNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "CURRENCYLINECOST",
            "required": false,
            "persistent": false,
            "title": "Currency Line Cost",
            "remarks": "Line Cost in vendor currency.",
            "sameAsAttribute": "CURRENCYLINECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location where the item will be used.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the item.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "REMARK",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Comment about the item or transaction. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "REMARK",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "FROMSTORELOC",
            "required": false,
            "persistent": false,
            "title": "From Location",
            "remarks": "Storeroom from where the item is received. Click the Select Value button to choose a storeroom location.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "FROMBIN",
            "required": false,
            "persistent": false,
            "title": "From Bin",
            "remarks": "Bin number in this storeroom from which the item is being transferred. Click the Select Value button to choose a bin.",
            "sameAsAttribute": "BINNUM",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "QTYHELD",
            "required": false,
            "persistent": false,
            "title": "Quantity Held",
            "remarks": "Used for internal processing.",
            "sameAsAttribute": "QTYHELD",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "FROMLOT",
            "required": false,
            "persistent": false,
            "title": "From Lot",
            "remarks": "Manufacturer's batch, or lot, from which the item is being taken. Click the Select Value button to choose a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "TOLOT",
            "required": false,
            "persistent": false,
            "title": "To Lot",
            "remarks": "Internal lot number into which the item being transferred or received is placed, which is different than the manufacturer's lot number. The internal lot number is used to track a received item so that it can be used in the appropriate time frame, such as first-in first-out or last-in last-out. Click the Select Value button to choose a lot.",
            "sameAsAttribute": "LOTNUM",
            "sameAsObject": "INVLOT"
        },
        {
            "attributeName": "LOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "The linecost of the transfer, calculated as unitcost multiplied by quantity plus taxes and special charges.",
            "sameAsAttribute": "LOADEDCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TAX1CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 1",
            "remarks": "Tax code used for calculation of Tax1 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX1",
            "required": false,
            "persistent": false,
            "title": "Tax 1",
            "remarks": "Amount of tax due on line item levied by Tax1Code.",
            "sameAsAttribute": "TAX1",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TAX2CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 2",
            "remarks": "Tax code used for calculation of Tax2 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX2",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "Amount of tax due on line item levied by Tax2Code.",
            "sameAsAttribute": "TAX2",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TAX3CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 3",
            "remarks": "Tax code used for calculation of Tax3 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX3",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "Amount of tax due on line item levied by Tax3Code.",
            "sameAsAttribute": "TAX3",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TAX4CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 4",
            "remarks": "Tax code used for calculation of Tax4 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX4",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "Amount of tax due on line item levied by Tax4Code.",
            "sameAsAttribute": "TAX4",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TAX5CODE",
            "required": false,
            "persistent": false,
            "title": "Tax Code 5",
            "remarks": "Tax code used for calculation of Tax5 column.",
            "sameAsAttribute": "TAXCODE",
            "sameAsObject": "TAX"
        },
        {
            "attributeName": "TAX5",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "Amount of tax due on line item levied by Tax5Code.",
            "sameAsAttribute": "TAX5",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "PRORATED",
            "required": true,
            "persistent": false,
            "title": "Prorated",
            "remarks": "Has line amount been prorated (allocated)?",
            "sameAsAttribute": "PRORATED",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "PRORATECOST",
            "required": false,
            "persistent": false,
            "title": "Prorate Cost",
            "remarks": "Amount of special charges loaded onto the line item.",
            "sameAsAttribute": "PRORATECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Inspection Status",
            "remarks": "Status of the receipt.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date the receipt status last changed.",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "STATUSCHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Status Changed By",
            "remarks": "Person who last changed the receipt status.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": false,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "QTYREQUESTED",
            "required": false,
            "persistent": false,
            "title": "Quantity Requested",
            "remarks": "The quantity requested for the transfer.",
            "sameAsAttribute": "QTYREQUESTED",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURBAL",
            "required": false,
            "persistent": false,
            "title": "Current Balance",
            "remarks": "Current balance at the time of the transfer or receipt",
            "sameAsAttribute": "CURBAL",
            "sameAsObject": "INVBALANCES"
        },
        {
            "attributeName": "EXCHANGERATE2",
            "required": false,
            "persistent": false,
            "title": "Secondary Exchange Rate",
            "remarks": "Base Exchange Rate 2",
            "sameAsAttribute": "EXCHANGERATE",
            "sameAsObject": "EXCHANGE"
        },
        {
            "attributeName": "LINECOST2",
            "required": false,
            "persistent": false,
            "title": "Secondary Line Cost",
            "remarks": "Base Currency Line Cost 2.",
            "sameAsAttribute": "LINECOST2",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "MRNUM",
            "required": false,
            "persistent": false,
            "title": "Requisition",
            "remarks": "Material Request Number",
            "sameAsAttribute": "MRNUM",
            "sameAsObject": "MR"
        },
        {
            "attributeName": "MRLINENUM",
            "required": false,
            "persistent": false,
            "title": "Requisition Line",
            "remarks": "MR Line Number",
            "sameAsAttribute": "MRLINENUM",
            "sameAsObject": "MRLINE"
        },
        {
            "attributeName": "MATRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "Receipt ID",
            "remarks": "Primary key for the table",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": false,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": false,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": "EXTERNALREFID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "IT6",
            "required": false,
            "persistent": false,
            "title": "IT6",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL6",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT7",
            "required": false,
            "persistent": false,
            "title": "IT7",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL7",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT8",
            "required": false,
            "persistent": false,
            "title": "IT8",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL8",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT9",
            "required": false,
            "persistent": false,
            "title": "IT9",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL9",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "IT10",
            "required": false,
            "persistent": false,
            "title": "IT10",
            "remarks": "Extra Field",
            "sameAsAttribute": "RL10",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITIN4",
            "required": false,
            "persistent": false,
            "title": "ITIN4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN5",
            "required": false,
            "persistent": false,
            "title": "ITIN5",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN6",
            "required": false,
            "persistent": false,
            "title": "ITIN6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITIN7",
            "required": false,
            "persistent": false,
            "title": "ITIN7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": false,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": "SENDERSYSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "FINCNTRLID",
            "required": false,
            "persistent": false,
            "title": "FCID",
            "remarks": "Financial Control Identifier",
            "sameAsAttribute": "FINCNTRLID",
            "sameAsObject": "FINCNTRL"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "COSTINFO",
            "required": true,
            "persistent": false,
            "title": "Cost Information",
            "remarks": "Is the cost Information on this line",
            "sameAsAttribute": "COSTINFO",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "BELONGSTO",
            "required": false,
            "persistent": false,
            "title": "Belongs To",
            "remarks": "Matrectransid of the parent",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REFWO",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Referenced Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENTEREDASTASK",
            "required": true,
            "persistent": false,
            "title": "Entered as Task",
            "remarks": "Was this transaction created against a work order task?",
            "sameAsAttribute": "ENTEREDASTASK",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "FROMSITEID",
            "required": false,
            "persistent": false,
            "title": "From Site",
            "remarks": "Site from where the item is transferred. By default, Maximo uses the site of the selected storeroom. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "RECEIPTREF",
            "required": false,
            "persistent": false,
            "title": "ReceiptRef",
            "remarks": "MatRecTransID of the creating receipt",
            "sameAsAttribute": "MATRECTRANSID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "LINETYPE",
            "required": true,
            "persistent": false,
            "title": "Line Type",
            "remarks": "Decribes the line type.",
            "sameAsAttribute": "LINETYPE",
            "sameAsObject": "PRLINE"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Item Description.",
            "sameAsAttribute": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REMARK_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Remark Long Description",
            "remarks": "Long Description for Receipt line remark.",
            "sameAsAttribute": "REMARK_LONGDESCRIPTION",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "INVOICEMATUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "INVOICEMATUNITCOST",
            "sameAsAttribute": "INVOICEMATUNITCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "UNINVOICEDCOST",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Cost",
            "remarks": "UNINVOICEDCOST",
            "sameAsAttribute": "UNINVOICEDCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "UNINVOICEDQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Uninvoiced Quantity",
            "remarks": "UNINVOICEDQUANTITY",
            "sameAsAttribute": "UNINVOICEDQUANTITY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "NEWSITE",
            "required": false,
            "persistent": false,
            "title": "To Site",
            "remarks": "Site where the item is being transferred. By default, Maximo inserts the site of the storeroom you selected. Click the Select Value button to choose a site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NEWPHYSCNTDATE",
            "required": false,
            "persistent": false,
            "title": "Physical Count Date",
            "remarks": "NEWPHYSCNTDATE",
            "sameAsAttribute": "NEWPHYSCNTDATE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "NEWPHYSCNT",
            "required": false,
            "persistent": false,
            "title": "Physical Count",
            "remarks": "NEWPHYSCNT",
            "sameAsAttribute": "NEWPHYSCNT",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "TASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Work order's task ID number associated with the line item.",
            "sameAsAttribute": "TASKID",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "Identifies the work order for this line item.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "RESERVEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Reserved",
            "remarks": "RESERVEDQTY",
            "sameAsAttribute": "RESERVEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REQUESTNUM",
            "required": false,
            "persistent": false,
            "title": "Request",
            "remarks": "REQUESTNUM",
            "sameAsAttribute": "REQUESTNUM",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "POLINECOST",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "POLINECOST",
            "sameAsAttribute": "POLINECOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "POUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "POUNITCOST",
            "sameAsAttribute": "POUNITCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "USEBY",
            "required": false,
            "persistent": false,
            "title": "Expiration Date",
            "remarks": "USEBY",
            "sameAsAttribute": "USEBY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "MFGLOTNUM",
            "required": false,
            "persistent": false,
            "title": "Manufacturer Lot",
            "remarks": "Manufacturer's lot number for the item. This is the manufacturer's internal lot number, and is the lot number the manufacturer would reference in any correspondence with you.",
            "sameAsAttribute": "MFGLOTNUM",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "SHELFLIFE",
            "required": false,
            "persistent": false,
            "title": "Shelf Life (Days)",
            "remarks": "Shelf life, in days, of the lotted item. If there is an expiration date provided for this item, this field is typically blank. If there is no expiration date, but a shelf life is specified for the item, it is entered here, in days. Maximo calculates an expiration date as the current system date plus the shelf life, and enters this value in the Expiration Date field.",
            "sameAsAttribute": "SHELFLIFE",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYORDERUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "CURRENCYORDERUNITCOST",
            "sameAsAttribute": "CURRENCYORDERUNITCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYTAX5",
            "required": false,
            "persistent": false,
            "title": "Tax 5",
            "remarks": "CURRENCYTAX5",
            "sameAsAttribute": "CURRENCYTAX5",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYTAX4",
            "required": false,
            "persistent": false,
            "title": "Tax 4",
            "remarks": "CURRENCYTAX4",
            "sameAsAttribute": "CURRENCYTAX4",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYTAX3",
            "required": false,
            "persistent": false,
            "title": "Tax 3",
            "remarks": "CURRENCYTAX3",
            "sameAsAttribute": "CURRENCYTAX3",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYTAX2",
            "required": false,
            "persistent": false,
            "title": "Tax 2",
            "remarks": "CURRENCYTAX2",
            "sameAsAttribute": "CURRENCYTAX2",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYTAX1",
            "required": false,
            "persistent": false,
            "title": "Tax 1",
            "remarks": "CURRENCYTAX1",
            "sameAsAttribute": "CURRENCYTAX1",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CURRENCYLOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "CURRENCYLOADEDCOST",
            "sameAsAttribute": "CURRENCYLOADEDCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CATEGORY",
            "required": false,
            "persistent": false,
            "title": "Category",
            "remarks": "Category of the item.",
            "sameAsAttribute": "CATEGORY",
            "sameAsObject": "INVENTORY"
        },
        {
            "attributeName": "ISDISTRIBUTED",
            "required": true,
            "persistent": false,
            "title": "Distributed",
            "remarks": "ISDISTRIBUTED",
            "sameAsAttribute": "ISDISTRIBUTED",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ROTATINGASSETDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "ROTATINGASSETDESC",
            "sameAsAttribute": "ROTATINGASSETDESC",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ORDERQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Order Quantity.",
            "sameAsAttribute": "ORDERQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "QTYALREADYRECVD",
            "required": false,
            "persistent": false,
            "title": "Quantity Already Received",
            "remarks": "Quantity Already Received",
            "sameAsAttribute": "QTYALREADYRECVD",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ASN",
            "required": true,
            "persistent": false,
            "title": "ASN",
            "remarks": "Is created according to advanced shipping notice",
            "sameAsAttribute": "ASN",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "RECEIPTQUANTITY",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "Number of items you are receiving, or transferring from the storeroom.",
            "sameAsAttribute": "RECEIPTQUANTITY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "To Condition Code",
            "remarks": "Condition code that reflects the current physical condition of the item being transferred. Click the Select Value button to choose a condition code.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "FROMCONDITIONCODE",
            "required": false,
            "persistent": false,
            "title": "From Condition Code",
            "remarks": "Condition code that reflects the physical condition of the item as it was in the originating storeroom. Click the Select Value button to choose a condition code.",
            "sameAsAttribute": "CONDITIONCODE",
            "sameAsObject": "ITEMCONDITION"
        },
        {
            "attributeName": "CONDRATE",
            "required": false,
            "persistent": false,
            "title": "Rate Percentage",
            "remarks": "Condition Rate Percentage",
            "sameAsAttribute": "CONDRATE",
            "sameAsObject": "INVCOST"
        },
        {
            "attributeName": "COMMODITYGROUP",
            "required": false,
            "persistent": false,
            "title": "Commodity Group",
            "remarks": "Identifies the commodity group of the item.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
        },
        {
            "attributeName": "COMMODITY",
            "required": false,
            "persistent": false,
            "title": "Commodity Code",
            "remarks": "Identifies the commodity code of the item.",
            "sameAsAttribute": "COMMODITY",
            "sameAsObject": "COMMODITIES"
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
            "attributeName": "MATUSETRANSID",
            "required": false,
            "persistent": false,
            "title": "Kit Use Identifier",
            "remarks": "Used when breaking an inventory Kit, this is the identifier of the MatUseTrans record for the Kit item.",
            "sameAsAttribute": "MATUSETRANSID",
            "sameAsObject": "MATUSETRANS"
        },
        {
            "attributeName": "COURIER",
            "required": false,
            "persistent": false,
            "title": "Courier",
            "remarks": "Company used to transfer the item across organizations. Click the Select Value button to choose a courier.",
            "sameAsAttribute": "COURIER",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "INSPECTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity to be Inspected",
            "remarks": "Number of items inspected",
            "sameAsAttribute": "INSPECTEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ACCEPTEDQTY",
            "required": false,
            "persistent": false,
            "title": "Quantity Accepted",
            "remarks": "Quantity that has been accepted",
            "sameAsAttribute": "ACCEPTEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "POSITEID",
            "required": false,
            "persistent": false,
            "title": "PO Site ID",
            "remarks": "The siteid where the po was created.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "INSPECTEDQTYDSPLY",
            "required": false,
            "persistent": false,
            "title": "Inspected Qty",
            "remarks": "For display only - quantity left to display",
            "sameAsAttribute": "INSPECTEDQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "REJECTQTYDISPLAY",
            "required": false,
            "persistent": false,
            "title": "Reject Quantity",
            "remarks": "The reject quantity field for the Change Inspection Status dialog.",
            "sameAsAttribute": "REJECTQTY",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "ROTASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Rotating Asset",
            "remarks": "Identifies the rotating asset number associated with the item being transfered.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DISPLAYUNITCOST",
            "required": false,
            "persistent": false,
            "title": "Unit Cost",
            "remarks": "Displayed unitcost",
            "sameAsAttribute": "DISPLAYUNITCOST",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "CLAIMNUM",
            "required": false,
            "persistent": false,
            "title": "Claim #",
            "remarks": "Claim number.",
            "sameAsAttribute": "CLAIMNUM",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "REJECTCOST",
            "required": false,
            "persistent": false,
            "title": "Rejected Cost",
            "remarks": "Rejected extended or lump sum cost of this transaction line.",
            "sameAsAttribute": "REJECTCOST",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "ENTERDATE",
            "required": false,
            "persistent": false,
            "title": "Entered Date",
            "remarks": "Date the service use is reported.",
            "sameAsAttribute": "ENTERDATE",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "SSPL1",
            "required": false,
            "persistent": false,
            "title": "Sspl1",
            "remarks": "Service Reporting Crossover from POLINE.PLIN1.",
            "sameAsAttribute": "IN19",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ROLLUP",
            "required": true,
            "persistent": false,
            "title": "Rolled Up",
            "remarks": "Indicates whether or not this transaction has been rolled up.",
            "sameAsAttribute": "ROLLUP",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "SSPL2",
            "required": false,
            "persistent": false,
            "title": "Sspl2",
            "remarks": "Service Reporting Crossover from POLINE.PLIN2.",
            "sameAsAttribute": "IN20",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL3",
            "required": false,
            "persistent": false,
            "title": "Sspl3",
            "remarks": "Service Reporting Crossover from POLINE.PLIN3.",
            "sameAsAttribute": "IN21",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SERVRECTRANSID",
            "required": false,
            "persistent": false,
            "title": "Service",
            "remarks": "Primary key for the table",
            "sameAsAttribute": "SERVRECTRANSID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "SSPL4",
            "required": false,
            "persistent": false,
            "title": "SSPL4",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN24",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL5",
            "required": false,
            "persistent": false,
            "title": "SSPL5",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN25",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL6",
            "required": false,
            "persistent": false,
            "title": "SSPL6",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN26",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SSPL7",
            "required": false,
            "persistent": false,
            "title": "SSPL7",
            "remarks": "Extra Field",
            "sameAsAttribute": "IN27",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TEMPLOADEDCOST",
            "required": false,
            "persistent": false,
            "title": "Loaded Cost",
            "remarks": "TEMPLOADEDCOST",
            "sameAsAttribute": "TEMPLOADEDCOST",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "AMTTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Line Cost",
            "remarks": "AMTTORECEIVE",
            "sameAsAttribute": "AMTTORECEIVE",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "PERCENTAGE",
            "required": false,
            "persistent": false,
            "title": "Percent",
            "remarks": "PERCENTAGE",
            "sameAsAttribute": "PERCENTAGE",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "QTYTORECEIVE",
            "required": false,
            "persistent": false,
            "title": "Quantity",
            "remarks": "QTYTORECEIVE",
            "sameAsAttribute": "QTYTORECEIVE",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "LINECOSTALREADYRECVD",
            "required": false,
            "persistent": false,
            "title": "Line Cost Already Received",
            "remarks": "Line Cost Already Received",
            "sameAsAttribute": "LINECOSTALREADYRECVD",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": false,
            "title": "Changed By",
            "remarks": "User who last changed this record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Changed Date",
            "remarks": "Timestamp of when the transaction was approved.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "INSPECTIONCOST",
            "required": false,
            "persistent": false,
            "title": "Cost to be Inspected",
            "remarks": "Cost of inspected items",
            "sameAsAttribute": "INSPECTIONCOST",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "ACCEPTEDCOST",
            "required": false,
            "persistent": false,
            "title": "Accepted Cost",
            "remarks": "Cost of accepted items",
            "sameAsAttribute": "ACCEPTEDCOST",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which the service was used.",
            "sameAsAttribute": "ACTUALSTASKID",
            "sameAsObject": "SERVRECTRANS"
        },
        {
            "attributeName": "INSPECTED",
            "required": true,
            "persistent": false,
            "title": "Inspected",
            "remarks": "Inspection Status Flag - Useful for Integration Users",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEMBO",
            "required": false,
            "persistent": false,
            "title": "Source MBO",
            "remarks": "Source Mbo Name - Useful for Integration Users",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "EXT_RCV_COST",
            "required": true,
            "persistent": false,
            "title": "Cost Override",
            "remarks": "Cost override flag fo ext system - Useful for Integration Users",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POREVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "PO Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "INVUSELINENUM",
            "required": false,
            "persistent": false,
            "title": "Line",
            "remarks": "The identifier of the inventory usage line.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPMENTNUM",
            "required": false,
            "persistent": false,
            "title": "Shipment",
            "remarks": "The shipment document reference number provided by the supplier.",
            "sameAsAttribute": "SHIPMENTNUM",
            "sameAsObject": "SHIPMENT"
        },
        {
            "attributeName": "SHIPMENTLINENUM",
            "required": false,
            "persistent": false,
            "title": "Shipment Line",
            "remarks": "The shipment document reference line number provided by the supplier.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWASSETNUM",
            "required": false,
            "persistent": false,
            "title": "New Asset Number",
            "remarks": "Identifies the new asset number that is associated with this record.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ORGRCVEXTERNALREFID",
            "required": false,
            "persistent": false,
            "title": "External Reference ID",
            "remarks": "The external reference identifier of the original receipt.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QTYOVERRECEIVED",
            "required": false,
            "persistent": false,
            "title": "Over Received Quantity",
            "remarks": "The quantity of items that were received in excess of the amount ordered.",
            "sameAsAttribute": "QTYOVERRECEIVED",
            "sameAsObject": "MATRECTRANS"
        },
        {
            "attributeName": "COSTOVERRECEIVED",
            "required": false,
            "persistent": false,
            "title": "Over Received Amount",
            "remarks": "The amount that exceeds the cost of the ordered items.",
            "sameAsAttribute": "COSTOVERRECEIVED",
            "sameAsObject": "MATRECTRANS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}