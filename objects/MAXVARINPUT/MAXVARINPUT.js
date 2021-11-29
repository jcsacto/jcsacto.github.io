mos = {
    "objectName": "MAXVARINPUT",
    "className": "psdi.app.system.virtual.MaxVarInputSet",
    "description": "Non-persitent table for maxvar set up dialogs.",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "The virtual field for selection of organization used by maxvar set up dialogs",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The virtual field for selection of site used by maxvar set up dialogs",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "SETACTSTARTONINIT",
            "required": true,
            "persistent": false,
            "title": "Set Actual Start Date on Change Status Initialize",
            "remarks": "Specifies the actual start date for a work order. Select On Change Status Initiate for Maximo to use the date on which the work order status changes to Initiate. Select On Change Status Complete for Maximo to use the date on which the status changes to Complete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOWNTIMEDFLTS",
            "required": false,
            "persistent": false,
            "title": "Default Downtime Start",
            "remarks": "Specifies which date appears by default in the Start field when Maximo displays the Downtime Report message, used for asset downtime reporting. If you choose On Reported Date (the default), the Start field displays the date when the problem was reported. If you choose On Actual Start Date, the Start field displays the actual start date of the work order. If you choose None, the Start field will be blank.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVEOPERATIONS",
            "required": true,
            "persistent": false,
            "title": "Save Work Plan Operations",
            "remarks": "If true then estimates for work plan operations will be saved to the work order when work order is closed or completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVEMATERIAL",
            "required": true,
            "persistent": false,
            "title": "Save Work Plan Material",
            "remarks": "If true then estimates for work plan materials will be saved as actuals when the work order is closed or completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVELABOR",
            "required": true,
            "persistent": false,
            "title": "Save Work Plan Labor",
            "remarks": "If true then estimates for work plan labor will be saved as actuals when the work order is closed or completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAVETOOLS",
            "required": true,
            "persistent": false,
            "title": "Save Work Plan Tools",
            "remarks": "If true then estimates for work plan tools will be saved as actuals when the work order is closed or completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARREXPDATE",
            "required": true,
            "persistent": false,
            "title": "Display Warranty Status",
            "remarks": "Specifies whether Maximo will display a message if an asset under warrenty is entered on a work order. If the check box is selected, Maximo will display a message. It the check box is cleared, Maximo will not display a message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOWNPROMPT",
            "required": true,
            "persistent": false,
            "title": "Display Downtime Report Prompt upon WO Completion for Asset in a 'Down' Status",
            "remarks": "Specifies whether Maximo will display the Change Asset Status dialog box when the work order status for a down asset changes to complete or closed. If the check box is selected, Maximo displays the dialog box. It the check box is cleared, Maximo does not display the dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKIPDUPATLOC",
            "required": true,
            "persistent": false,
            "title": "Duplicate Problem Display Dialog on Location",
            "remarks": "If true then a Duplicate Problem dialog box will be displayed when a user enters a work order for a location and an open work order with the same problem code already exists for the location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKIPDUPWITHASSET",
            "required": true,
            "persistent": false,
            "title": "Duplicate Problem Display Dialog on Asset",
            "remarks": "If true then a Duplicate Problem dialog box will be displayed when a user enters a work order for an asset and an open work order with the same problem code already exists for the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFONPMGENERATION",
            "required": false,
            "persistent": false,
            "title": "Work Orders on PM Generation",
            "remarks": "For the selected site, specifies how work flow interacts with PM Generation. If the check box is selected, Maximo will automatically start the work flow process when a work order is generated by a PM. If the check box is cleared (the default), the work flow process must be started manually.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFONPRREORDER",
            "required": false,
            "persistent": false,
            "title": "Purchase Requisitions on Reorder",
            "remarks": "For the selected site, specifies how work flow interacts with purchase requisitions. If the check box is selected, Maximo will automatically start the work flow process when a purchase requisition is reordered. If the check box is cleared (the default), the work flow process must be started manually.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFONPOREORDER",
            "required": false,
            "persistent": false,
            "title": "Purchase Orders on Reorder",
            "remarks": "For the selected site, specifies how work flow interacts with reordered purchase orders. If the check box is selected, Maximo will automatically start the work flow process when a purchase order is reordered. If the check box is cleared (the default), the work flow process must be started manually.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "WFONPOAPPROVAL",
            "required": false,
            "persistent": false,
            "title": "Work Orders on PO Approval",
            "remarks": "For the selected site, specifies how work flow interacts with purchase order approval. If the check box is selected, Maximo will automatically start the work flow process when the status of a purchase order changes to APPROVED. If the check box is cleared (the default), the work flow process must be started manually.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PRAPPROVAL",
            "required": true,
            "persistent": false,
            "title": "Require Approval to Convert PR to PO or Contract",
            "remarks": "Specifies whether Maximo will require a PR to be approved before it can be converted to a PO or contract. If this checkbox is selected, the PR must be approved. If the check box is cleared (the default), Maximo will not require approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRCHANGE",
            "required": true,
            "persistent": false,
            "title": "Close PR/RFQ When All PR/RFQ Lines Have Been Copied to POs or Contracts",
            "remarks": "Specifies whether Maximo will automatically convert the status of a PR or RFQ to CLOSED when all the PR or RFQ lines have been copied to POs or contracts. If this check box is selected (the default), Maximo will automatically convert the status to CLOSED. If the check box is cleared, Maximo will not automatically covert the status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRSPECIALDIRECT",
            "required": true,
            "persistent": false,
            "title": "Add Standard Service Costs to Direct Issue Lines Only",
            "remarks": "Specifies when Maximo will automatically add standard service costs to direct issue lines. If this check box is selected, Maximo adds the standard service costs only to direct issue lines. If the check box is cleared (the default), Maximo adds the costs to all issue lines.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOBLANKETPOREL",
            "required": true,
            "persistent": false,
            "title": "Create Approved PO from Contract on PR Approval",
            "remarks": "Specifies the conditions under which Maximo automatically creates a PO from a contract. If this check box is selected, Maximo automatically creates an approved PO from a contract when the status of the PR changes to APPROVED. If the check box is cleared (the default), automatic PO approval does not occur.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORECEIPTIAS",
            "required": true,
            "persistent": false,
            "title": "PO Receipt IAS",
            "remarks": "Apply IAS on receipt of rotating items",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOCLOSEPO",
            "required": true,
            "persistent": false,
            "title": "Enable Option to Automatically Close PO's on Invoice Approval",
            "remarks": "Specifies whether Maximo will automatically close POs. If this check box is selected, Maximo will automatically close a PO when the invoice status changes to APPROVED. If the check box is cleared, no automatic approval occurs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEMGT",
            "required": true,
            "persistent": false,
            "title": "Invoice Management",
            "remarks": "Enables/Disables the Invoice Application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "A_BREAKPOINT",
            "required": false,
            "persistent": false,
            "title": "Type A Breakpoint",
            "remarks": "Percentage of inventory items associated with ABC Type A, used in ABC inventory analysis. For example, enter 30 to specify thirty percent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "B_BREAKPOINT",
            "required": false,
            "persistent": false,
            "title": "Type B Breakpoint",
            "remarks": "Percentage of inventory items associated with ABC Type B, used in ABC inventory analysis. For example, enter 30 to specify thirty percent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "C_BREAKPOINT",
            "required": false,
            "persistent": false,
            "title": "Type C Breakpoint",
            "remarks": "Percentage of inventory items associated with ABC Type C, used in ABC inventory analysis. For example, enter 40 to specify thirty percent.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "A_CCF",
            "required": false,
            "persistent": false,
            "title": "Type A Cycle Count",
            "remarks": "Cycle count frequency in days for inventory items of ABCType A.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "B_CCF",
            "required": false,
            "persistent": false,
            "title": "Type B Cycle Count",
            "remarks": "Cycle count frequency in days for inventory items of ABCType B.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "C_CCF",
            "required": false,
            "persistent": false,
            "title": "Type C Cycle Count",
            "remarks": "Cycle count frequency in days for inventory items of ABCType C.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEGATIVECURBAL",
            "required": false,
            "persistent": false,
            "title": "Negative Current Balance",
            "remarks": "Specifies whether Maximo will allow users to issue or transfer items with a negative current balance. If Allow Negative Balance is selected, users can issue items with a negative balance. If Disallow Negative Balance is selected (the default), users cannot issue such items. NOTE: Maximo checks balances at the Bin level, not the Storeroom level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEGATIVEAVAIL",
            "required": false,
            "persistent": false,
            "title": "Negative Availability",
            "remarks": "Specifies whether Maximo will allow users to issue or transfer items with a negative available balance. If Allow Negative Available Balance is selected (the default), users can issue items with a negative available balance. If Disallow Negative Available Balance is selected, users cannot issue such items. NOTE: Maximo checks balances at the Bin level, not the Storeroom level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOPOEXT",
            "required": false,
            "persistent": false,
            "title": "External PO on Reorder",
            "remarks": "Specifies the type of purchase requisition or purchase order that Maximo creates when a reorder request uses external vendors. Choose one of the four options. The default is an unapproved purchase requisition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOPOINT",
            "required": false,
            "persistent": false,
            "title": "Internal PO on Reorder",
            "remarks": "Specifies the type of purchase requisition or purchase order that Maximo creates when a reorder request uses internal vendors. Choose one of the four options. The default is an approved purchase order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXPRLINES",
            "required": false,
            "persistent": false,
            "title": "Maximum Number of Reorder Lines per PO/PR",
            "remarks": "Specifies the maximum number of reorder lines that can appear on a purchase order or purchase requisition. The default is 40.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFISSUECOST",
            "required": false,
            "persistent": false,
            "title": "Default Issue Cost",
            "remarks": "Specify the default issue cost that applies when an item is issued from the selected site. The default issue cost can be standard cost, average cost, last-in-first-out (LIFO), or first-in-first-out (FIFO).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFORDERCOST",
            "required": false,
            "persistent": false,
            "title": "Default Order Cost",
            "remarks": "Use standard/average/last/vendor cost as the default on a PR/PO?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COSTFROMASSET",
            "required": true,
            "persistent": false,
            "title": "Use Asset Cost",
            "remarks": "For the selected site, specifies whether Maximo uses issue cost (the default) or asset cost when a noncapitalized rotating asset is issued. The setting applies only to the selected site.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASHIST_ON_WOSTATUS",
            "required": false,
            "persistent": false,
            "title": "WOStatus for AssetHistory",
            "remarks": "Specifies whether Maximo records asset history when a work order status changes to COMPLETE or when it changes to CLOSED. Select the appropriate button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASMETERWEIGHTPRCNT",
            "required": false,
            "persistent": false,
            "title": "Meter Weight Percentage",
            "remarks": "Default for the meter weight percentage attributes in the Asset object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYSYSTEM",
            "required": false,
            "persistent": false,
            "title": "Primary System",
            "remarks": "Lochierarchy system identified as the default hierarchical system",
            "sameAsAttribute": "SYSTEMID",
            "sameAsObject": "LOCSYSTEM"
        },
        {
            "attributeName": "WOGENWHERECLAUSE",
            "required": false,
            "persistent": false,
            "title": "WO Generation Where Clause",
            "remarks": "For the selected site, provides you the option of creating a custom Where clause for Maximo to automatically generate PMs. A value of NULL (the default) indicates that no custom Where clause will be used.",
            "sameAsAttribute": "VARVALUE",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "LR_APPR_IN_LABOR",
            "required": true,
            "persistent": false,
            "title": "Automatically Approve Inside Labor Transactions",
            "remarks": "Specifies whether inside labor transactions should be automatically approved. If the check box is selected (default), reporting of actual labor is automatically approved. If the check box is cleared, the labor must be approved manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LR_APPR_OUT_LABOR",
            "required": true,
            "persistent": false,
            "title": "Automatically Approve Outside Labor Transactions",
            "remarks": "Specifies whether outside labor transactions should be automatically approved. If the check box is selected, reporting of actual labor from a source outside the organization is automatically approved. If the check box is cleared (the default), the labor must be approved manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LR_PO_OUTLAB_RQRD",
            "required": true,
            "persistent": false,
            "title": "Company Default for PO Required for Outside Labor",
            "remarks": "Specifies whether a PO is required to procure labor that is outside the organization? If the checkbox is selected, a PO is required. It the check box is cleared (the default), a PO is not required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMUSEJPPRIORITY",
            "required": true,
            "persistent": false,
            "title": "Use Priority from Job Plans on Sequenced PMs",
            "remarks": "For the selected site, specifies whether Maximo uses the priority entered on job plans to sequence PMs. If this check box is selected, Maximo sequences PMs according to job plan priority. If the check box is cleared (the default), Maximo will not use those priorities.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOGENERATIONDAYS",
            "required": false,
            "persistent": false,
            "title": "Generate WOs Due on the Current Date Plus This Number of Days",
            "remarks": "For the selected site, specifies the lead time in days between when an automatically generated work order is created and when the preventive maintenance is scheduled to be done. For example, if a PM is scheduled for January 15 and you enter a value of 5, the work order will be generated on January 10. The default is 0 days (no lead time).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOGENUSEFREQCRITRA",
            "required": true,
            "persistent": false,
            "title": "Use Frequency Criteria",
            "remarks": "For the selected site, specifies whether Maximo will use the frequency criteria on a PM in generating work orders. If the check box is selected (the default), Maximo calculates the due date for a PM from the frequency criteria on its Frequency tab. If the check box is cleared, Maximo ignores frequency criteria.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOPMWOGEN",
            "required": true,
            "persistent": false,
            "title": "Automatic PM WO generation",
            "remarks": "For the selected site, specifies whether Maximo will automatically generate work orders from PMs. If this check box is selected (the default), Maximo will automatically generate work orders. If the check box is cleared, Maximo will not automatically generate work orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKSEED",
            "required": false,
            "persistent": false,
            "title": "Starting Number",
            "remarks": "For the selected site, work order task numbers will start with the number you specify here.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKINTERVAL",
            "required": false,
            "persistent": false,
            "title": "Increment By",
            "remarks": "For the selected site, work order task numbers will increment by the number you specify here.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOGENEMAIL",
            "required": false,
            "persistent": false,
            "title": "E-mail Address Notification",
            "remarks": "For the selected site, provides you the option of specifying an e-mail address for the Wogen Crontask output. If this field is empty (the default), Maximo will not automatically send an e-mail based on settings in the Wogen CronTask.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMACTUALMETER",
            "required": true,
            "persistent": false,
            "title": "Base Work Order Generation on Meter Reading Only (Do Not Estimate)",
            "remarks": "For the selected site, specifies whether Maximo will generate work orders based only on the meter readings, not on estimated due dates. If the check box is selected Maximo generates work orders based only on actual meter readings. If the the check box is cleared (the default), Maximo will use other criteria.",
            "sameAsAttribute": "USEFREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ASSETDRILLDOWNTOP",
            "required": false,
            "persistent": false,
            "title": "Asset or Location",
            "remarks": "Specifies whether you want the Drilldown to open to the Asset tab or the Location tab. Choose Top Level Starts at Top Level Location (the default) if you want the Drilldown to open to the Locations tab. The display will start at the top location in the primary system. Choose Top Level Starts at Top Level Asset if you want the Drilldown to open to the Assets tab. It will display all assets that do not have a parent. NOTE: If an organization has a large number of top-level asset records, selecting this option may cause a delay in displaying the records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DDASSETCOUNT",
            "required": true,
            "persistent": false,
            "title": "Asset Count",
            "remarks": "Display asset count on Location tab?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDUPATLOC",
            "required": true,
            "persistent": false,
            "title": "On Location",
            "remarks": "Specifies whether Maximo will display the Duplicate Problem dialog box when a user enters a work order for a location that is already entered on another open work order with the same problem code. If the check box is selected, Maximo will display the dialog box. If the check box is cleared, Maximo will not display the dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWDUPWITHASSET",
            "required": true,
            "persistent": false,
            "title": "On Asset",
            "remarks": "Specifies whether Maximo will display the Duplicate Problem dialog box when a user enters a work order for an asset that is already entered on another open work order with the same problem code. If the check box is selected, Maximo will display the dialog box. If the check box is cleared, Maximo will not display the dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWSPORDER",
            "required": true,
            "persistent": false,
            "title": "Allow the Generation of Special Order Items",
            "remarks": "Specifies whether Maximo will allow the generation of Special Order items. If this check box is selected, Maximo will allow the generation of Special Order items. If the check box is cleared, Maximo will not allow this.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAMESEQ",
            "required": true,
            "persistent": false,
            "title": "Name Sequence",
            "remarks": "Specifies how the names of people are displayed in Maximo. Select one of the three formats.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHOWWORKASSETHAZ",
            "required": true,
            "persistent": false,
            "title": "Show Work Asset's Hazards in the Select Hazards Action",
            "remarks": "For the selected site, specifies whether Maximo will display an asset's hazards when a user selects the Select Hazards action in the Safety Plans application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LR_PO_INLAB_RQRD",
            "required": true,
            "persistent": false,
            "title": "Require PO to Approve Inside Labor",
            "remarks": "Specifies whether a PO is required to procure labor that is inside the organization? If the checkbox is selected, a PO is required. It the check box is cleared (the default), a PO is not required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEINVENTORY",
            "required": true,
            "persistent": false,
            "title": "Update cost/currency variances on inventory costs",
            "remarks": "Specifies whether the system copies the cost and currency differences (INVOICETRANS) to the variance accounts for the storeroom. If the check box is selected, the system copies the cost and currency differences. If the check box is cleared, the system does not copy them.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSTATUSCLEARRESV",
            "required": false,
            "persistent": false,
            "title": "Status for Clear",
            "remarks": "Specifies when Maximo will clear a work plan material reservation used on a work order. If you select To Complete, Maximo clears the reservation when the work order status changes to Complete. If you select To Closed, Maximo clears the reservation when the status changes to Closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISABLEGLSWITCH",
            "required": true,
            "persistent": false,
            "title": "Deactivate GL Validations",
            "remarks": "Specifies whether Maximo will validate entries in GL account fields against values in Chart of Accounts. If the check box is selected, Maximo will not validate entries in any GL fields. If the check box is cleared, Maximo will validate entries according to the settings in the three check boxes that follow this one.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCHECKCOA",
            "required": true,
            "persistent": false,
            "title": "Validate GL Component Combinations",
            "remarks": "Specifes whether Maximo will validate GL component combinations. If the check box is selected, Maximo will only accept a GL account entry if the combination of component values matches a GL account code in the GL Accounts table window. Moreover, the Select GL Account dialog box will not display any component value that has not been used as part of a GL account code in the GL Accounts table window. If this box is cleared, Maximo will accept any combination of valid component values. To be valid, a component value must match a value in the GL Component Maintenance dialog box. The composite GL account code does not have to match an existing one in the GL Accounts table window.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLVALIDATEFP",
            "required": true,
            "persistent": false,
            "title": "Validate Financial Periods",
            "remarks": "Specifies whether Maximo will validate financial periods. If the check box is selected, Maximo checks to make sure that a transaction falls within an open, valid financial period as defined in the Financial Periods dialog box. If the check box is cleared, Maximo will not perform this validation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLREQUIREDFORTRANS",
            "required": true,
            "persistent": false,
            "title": "Require Valid GL Account for All Transactions",
            "remarks": "Specifies whether Maximo will check to see if there is a valid GL account before allowing transactions. If the check box is selected, valid GL debit and credit accounts must be present on all transactions. In most cases, these GL accounts will be defaulted from the vendor record. If the check box is cleared, Maximo will allow transactions when users do not specify valid GL accounts in some places.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASELANGUAGE",
            "required": false,
            "persistent": false,
            "title": "Base Language",
            "remarks": "Base Language Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVRECEIPTDEFAULT",
            "required": true,
            "persistent": false,
            "title": "Allow Receipts against Services by Default",
            "remarks": "Specifies when Maximo will allow receipts against services. If this check box is selected (the default), Maximo will automatically allow receipts against services. If this check box is cleared, Maximo will not automatically allow receipts against services.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYSINGLESLA",
            "required": true,
            "persistent": false,
            "title": "Allow One SLA",
            "remarks": "For the selected site, specifies whether Maximo will limit the application of service level agreements (SLA) to just one, or whether it will allow more than one service level agreement. If you choose multiple SLAs, the Apply Multiple SLAs option below it is enabled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USESLARANKING",
            "required": true,
            "persistent": false,
            "title": "Apply Multiple SLAs",
            "remarks": "This option is enabled only if Allow Application of Multiple SLAs?, above it, is selected. For the selected site, specifies how multiple SLAs are to be applied. Choose the top radio button if you want the multiple SLAs to be applied based on their ranking. Choose the bottom radio button if you want the multiple SLAs to be applied based on their commitment stringency.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIRMLABTRANS",
            "required": true,
            "persistent": false,
            "title": "Confirm Time Calculated by Timer",
            "remarks": "Confirm time calculated by timer?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOAPPRLABINVOICE",
            "required": true,
            "persistent": false,
            "title": "Automatically Approve Invoices Created from Labor Transactions",
            "remarks": "Specifies whether Maximo will automatically approve an invoice generated by a labor transaction. If this check box is selected, Maximo will approve such an invoice. If the check box is cleared, the invoice must be approved manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Calendar Start Day",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Calendar End Day",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "GLQUESTION",
            "required": false,
            "persistent": false,
            "title": "Character to Display for Unspecified GL Components",
            "remarks": "Placeholder character that Maximo uses for GL components that are not specified in GL account codes. For example, in the GL account code 6000-???-250 the question mark characters in the second segment are placeholders for an unspecified second component.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETDESCDELIMITER",
            "required": false,
            "persistent": false,
            "title": "Delimiter in Asset Descriptions",
            "remarks": "Classification catalog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABTRNALLOWANYCRFT",
            "required": true,
            "persistent": false,
            "title": "Allow Mismatched Craft and Labor When Reporting Actual Labor",
            "remarks": "Specifies whether Maximo will allow the craft and the labor to be different when a user reports actual labor. If this check box is selected, the craft and labor do not have to match. If the check box is cleared (the default), the labor and craft must match.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABTRANSONDISPATCH",
            "required": true,
            "persistent": false,
            "title": "Create Labor Transaction on Dispatch",
            "remarks": "Create Labor Transaction on Dispatch?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSTATUSONASNTCOMP",
            "required": false,
            "persistent": false,
            "title": "On Finish Assignment",
            "remarks": "WO Status after a completed Assignment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOMPWOGEN",
            "required": true,
            "persistent": false,
            "title": "Automatic MeasurePoint WO generation",
            "remarks": "Flag that indicates whether to generate work orders or not automatically from a MeasurePoint",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MPWOGENEMAIL",
            "required": false,
            "persistent": false,
            "title": "E-mail Address Notification",
            "remarks": "E-mail address to send MeasurePoint WOGen CronTask output",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MPWOGENUSECRITERIA",
            "required": true,
            "persistent": false,
            "title": "Use Action Limits as Work Order Generation Criteria",
            "remarks": "Should action criteria be considered when generating work orders for MeasurePoints?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMALERT",
            "required": false,
            "persistent": false,
            "title": "Generate PM Alerts for Assets When Corrective Maintenance Work Order Status is",
            "remarks": "For the selected site, specifies whether Maximo issues a PM alert and if so, based on what work order status. If you leave the field empty (the default), Maximo will not issue a PM alert. If you enter a work order status (you can use the Select Value button), Maximo issues a PM alert when the status of a work order changes to that value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODAVAILROWS",
            "required": false,
            "persistent": false,
            "title": "Rows in Modify Availability Dialog",
            "remarks": "Number of rows to display in the Assignment Manager ModAvail Dialog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MXINTDBUSER",
            "required": false,
            "persistent": false,
            "title": "Maximo user name for inbound  processing",
            "remarks": "Maximo user name for inbound integration processing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTGLOBALDIR",
            "required": false,
            "persistent": false,
            "title": "Global Directory Location",
            "remarks": "The directory to be used for all generated schema files, XML files, and error files. All those files are in predefined directories within this global directory. By default, this property has no value and the files are located in the same directory as the MAXIMO processing logs. If you specify an alternate location, it must be accessible from the Maximo server installation location as a mapped network drive. Note: Restart the Maximo application server after changing this property.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTEXPUPDSENDER",
            "required": true,
            "persistent": false,
            "title": "Update SENDERSYSID on Data Export",
            "remarks": "Specifies whether the MEA writes the Maximo system identifier (that is, the MXSYSID column in the MAXVARS table) to the SENDERSYSID field when it generates an outbound transaction via the Data Export feature. A check indicates that it does. Applies to outbound transactions only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTADMINTOEMAIL",
            "required": false,
            "persistent": false,
            "title": "Administrator E-mail Address",
            "remarks": "Address to which the MEA sends email error notification. You can override this value at the queue level, in the Add/Modify Queues dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTADMINFROMEMAIL",
            "required": false,
            "persistent": false,
            "title": "Sender E-mail Address",
            "remarks": "Address that appears as the sender in email error notifications that the MEA sends to the system administrator. This must exist as a valid email address.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MXINTDOMAIN",
            "required": true,
            "persistent": false,
            "title": "Interface creates Domain values",
            "remarks": "Specifies whether an inbound transaction will add domain values during transaction processing. A check indicates that it will.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSENORECEIVEDPO",
            "required": true,
            "persistent": false,
            "title": "Close PO on batch status",
            "remarks": "Always close PO's that are not completely received on batch status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OWNERCHECKAVAIL",
            "required": true,
            "persistent": false,
            "title": "Check Availability",
            "remarks": "Check availability when select owner",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABTRANSTOLERANCE",
            "required": true,
            "persistent": false,
            "title": "Future Labor Transaction Tolerance in Hours",
            "remarks": "The Amount of time in the future that labor transactions can be entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOLTORELGLOBAL",
            "required": true,
            "persistent": false,
            "title": "Apply solution to related global tickets",
            "remarks": "Apply solution to related global tickets",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLOSENOINVOICEPO",
            "required": true,
            "persistent": false,
            "title": "Close not completely invoiced PO on batch status",
            "remarks": "Always close PO's that are not completely invoiced on batch status change.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITASSET",
            "required": false,
            "persistent": false,
            "title": "IT Asset Top-Level Class",
            "remarks": "The ITASSET MAXVAR value is used by the Reconciliation Engine to determine the set of IT Assets that can be reconciled.  Rather than selecting all assets in the asset app it only selects the assets which are descendents of the ancestor class specified in the MAXVAR.  This value MUST be set for the Reconciliation engine to run.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CICLASS",
            "required": false,
            "persistent": false,
            "title": "CI Top-Level Class",
            "remarks": "The CICLASS MAXVAR value is used the Reconcilication Engine to determine the set of CI Classes that should be reconciled. Rather than selecting all CIs in the CI app it only selects the CIs which are descendents of the ancestor class specified in the MAXVAR.  This value MUST be set for the Reconciliation engine to run.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "ITSFW",
            "required": false,
            "persistent": false,
            "title": "IT Software Top-Level Class",
            "remarks": "The ITSFW MAXVAR value is used by the Software Contract app for IT Assets.  Rather than selecting all assets in the asset app it only selects the assets which are descendents of the ancestor class specified in the MAXVAR.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "KEEPTASKSTATUSHIST",
            "required": false,
            "persistent": false,
            "title": "Record Status History for Null Work Type Work Order Tasks",
            "remarks": "Record Status History for Null Work Type Work Order Tasks",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHCICLASS",
            "required": false,
            "persistent": false,
            "title": "Authorized CI Top-Level Class",
            "remarks": "The AUTHCICLASS MAXVAR value is used the Reconcilication Engine to determine the set of CI Classes that should be reconciled. Rather than selecting all CIs in the CI app it only selects the CIs which are descendents of the ancestor class specified in the MAXVAR.  This value MUST be set for the Reconciliation engine to run.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "NESTEDJOBPLANS",
            "required": false,
            "persistent": false,
            "title": "Process Nested Job Plans in the Background",
            "remarks": "Specifies whether to process nested job plans in the background when applying job plans to work order-related records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOINVUSE",
            "required": false,
            "persistent": false,
            "title": "Automatically create usage documents for new reservations",
            "remarks": "Automatically create usage documents for new reservations?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWRECEIPT",
            "required": true,
            "persistent": false,
            "title": "Allow Receipts and Invoices on PO Revisions",
            "remarks": "The default for this option is that receipts and invoices are processed against a purchase order while the purchase order is being revised. The previous revision of the purchase order stays in APPR (Approved) status until the new revision of the purchase order is approved. If this check box is cleared, receipts and invoices are not processed for purchase orders that are being revised. The previous revision of the purchase order goes into HOLD status until the new revision of the purchase order is approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGIGNORESRMAVAIL",
            "required": false,
            "persistent": false,
            "title": "Ignore storeroom availability for work order status",
            "remarks": "Indicates whether to ignore the availability of items in the storeroom for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGIGNOREDIAVAIL",
            "required": false,
            "persistent": false,
            "title": "Ignore direct issue availability for work order status",
            "remarks": "Indicates whether to ignore the availability of direct issues for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEIGNORESRMAVAIL",
            "required": false,
            "persistent": false,
            "title": "Ignore storeroom availability for work order status",
            "remarks": "Indicates whether to ignore the availability of items in the storeroom for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEIGNOREDIAVAIL",
            "required": false,
            "persistent": false,
            "title": "Ignore direct issue availability for work order status",
            "remarks": "Indicates whether to ignore the availability of direct issues for the work order status approval.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCEGLPSTDTVALSAV",
            "required": false,
            "persistent": false,
            "title": "Validate Financial Period at Invoice Save",
            "remarks": "Select this option to validate the financial period each time an invoice is saved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATEGLPSTDATE",
            "required": false,
            "persistent": false,
            "title": "Update G/L Post Date with Vendor Invoice Date",
            "remarks": "Select this option to copy the Invoice Date specified by the vendor to the G/L Posting Date field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESBUFFER",
            "required": false,
            "persistent": false,
            "title": "Inventory Processing Lead Time Buffer",
            "remarks": "The value will be used by the Reservation Status Crontask to include an additional margin of safety to set the reservation status appropriately.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TXFRREQSHIP",
            "required": false,
            "persistent": false,
            "title": "Require Shipment",
            "remarks": "Indicates whether a shipment record is required to transfer items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TXFRREQPO",
            "required": false,
            "persistent": false,
            "title": "Require Purchase Order",
            "remarks": "Indicates whether a purchase order is required to transfer inventory items.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOENABLEREPFAC",
            "required": true,
            "persistent": false,
            "title": "Enable Repair Facilities",
            "remarks": "Specifies whether the repair facilities feature is enabled. The repair facilities feature supports work orders for mobile assets that travel across Maximo site boundaries. Enabling the feature means that a repair facility, a special type of location, can take ownership of work orders from multiple sites that are in the same organization. User security can then be configured to give permissions to view work orders in multiple sites if the work orders are owned by the repair facility. When you enable the feature, fields that are related to repair facilities are made visible in the affected applications.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONOREPFACWARNING",
            "required": true,
            "persistent": false,
            "title": "Bypass Site Mismatch Warning Message",
            "remarks": "Specifies whether to prevent the display of a warning that is related to the repair facilities feature. The warning states that the specified asset resides in a site that is not the site on the current record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POPNDREVEDIT",
            "required": true,
            "persistent": false,
            "title": "Allow Cost and Tax Adjustments on PO Revision",
            "remarks": "If you enable this option, you can modify the unit cost, the line cost, and the tax cost for purchase order line items. The purchase order must be in PNDREV (Pending Revision) status.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMTAXROLLDOWN",
            "required": false,
            "persistent": false,
            "title": "Apply Tax-exempt Status to Item at Organization Level and at Vendor Level",
            "remarks": "Select this option to apply the tax-exempt status for the item down to the item organization level and down to the item vendor level when a tax-exempt status update transaction is processed without user interaction.The tax-exempt option indicates whether the item, the tool, or the service is taxable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBEROFTAXCODES0",
            "required": false,
            "persistent": false,
            "title": "Current Number of Tax Types Used",
            "remarks": "The number of tax types that you currently use.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBEROFTAXCODES",
            "required": true,
            "persistent": false,
            "title": "Number of Tax Types",
            "remarks": "Specify the number of tax types that you want to use.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBEROFTAXTEMP",
            "required": true,
            "persistent": false,
            "title": "Number of Tax Types",
            "remarks": "Specify the number of tax types that you want to use.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USECALFORSLAESCPT",
            "required": false,
            "persistent": false,
            "title": "Use Calendar for Escalation Ref Point",
            "remarks": "For the selected site specifies if calendars will be used if the Escalation originated from a SLA.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXCONSINVLINES",
            "required": false,
            "persistent": false,
            "title": "Maximum Number of Lines for a Consignment Invoice",
            "remarks": "Specify the maximum number of lines that can be included on a consignment type of invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDECONSITEMS",
            "required": false,
            "persistent": false,
            "title": "Include Consignment Items in a Separate PO/PR",
            "remarks": "Indicates whether to include consignment items in a separate purchase order or purchase requisition record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POASSETRETVAL",
            "required": true,
            "persistent": false,
            "title": "Do not allow assets to be returned to vendor if transactions are posted",
            "remarks": "If checked, this option will disallow rotating assets to be returned to a vendor even if the asset has been 'used' within the system.  For storeroom-received assets, the system will require the asset's location and inventory cost to match the storeroom and receipt cost of the original receipt.  For direct-issue received assets the system will require the location of the asset to be equivalent to the location the asset was originally received, and that no other financial transactions reference the asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYLINKTOWO",
            "required": false,
            "persistent": false,
            "title": "Copy Doclinks to Work Order on Save",
            "remarks": "When set to true, on saving work order, system will copy the related doclinks which has the copylinktowo flag set to work order, when set to false,system will not copy related doclinks to work order even the copylinktowo flag is set on doclinks table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCACTIVEVAL",
            "required": true,
            "persistent": false,
            "title": "Prevent tools not in 'Active' status from being entered",
            "remarks": "PLUSCACTIVEVAL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCAUTOSTATUS",
            "required": true,
            "persistent": false,
            "title": "Automatically set As-Found and As-Left status on a WO",
            "remarks": "Specifies whether the As Found Status field and the As Left Status field on a work order data sheet are set automatically or manually. If you select this check box, the As Found Status field and the As Left Status field are automatically set. This option is the default option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEXTDATE",
            "required": false,
            "persistent": false,
            "title": "Default Amount Allocated to Extend Date in PM (Cal) Application",
            "remarks": "Specifies the number of times you can extend the due date of a Preventative Maintenance (PM) record generating PM work orders without supervisor permission. Enter the number of times a user can extend the date on a PM record. The value must be 1 or higher.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPASTDUEVAL",
            "required": true,
            "persistent": false,
            "title": "Prevent past due tool from being entered",
            "remarks": "Specifies whether to prevent tools that are past their calibration due date to be used on a work order. If you select the check box, users cannot add the tool to the work order. This option is the default option. If you clear the check box, users can add the tool the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCQUALTECH",
            "required": false,
            "persistent": false,
            "title": "Qualified Technician",
            "remarks": "Specifies whether a warning message is displayed when an unqualified technician is added to a work order to use a tool. If you select No validation between Tool and Technician, users can add an unqualified technician to a work order. If you select Validate but with warning message, users can add an unqualified technician to a work order, but a warning message is displayed. If you select Enforce validation between Tool and Technician, then users cannot enter an unqualified technician. This option is enforced only when a technician is specified; not all tools require a qualified technician.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCTOLWARN",
            "required": false,
            "persistent": false,
            "title": "Tolerance Warning for exceeding limits",
            "remarks": "Specifies whether a warning message is displayed if a value in the As Found Output field or the As Left Output field exceeds a tolerance limit. If you select Validate once per save, a warning message is displayed when the work order is saved. If you select Validate upon tabbing from Output field, a warning message is displayed when you move from the As Found Output or the As Left Output fields. This option is the default option. If you select the Never validate check box, the warning message is not displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCVALTOOL",
            "required": false,
            "persistent": false,
            "title": "Validation of Tools on Work Orders",
            "remarks": "Specifies whether a warning message is displayed if information about a tool is not added to a work order that you close or complete. If you select No Validation Between Tools and Status of CLOSED or COMP, no validation occurs between the tool and the status of the work order. If you select Validate but with warning message, you can close or complete the work order without adding the tool, but a warning message is displayed. If you select Enforce validation between Tools and Status of CLOSED or COMP, a warning message prompts you to add a tool. You must add the tool to close or complete the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCMOBREADONLY",
            "required": false,
            "persistent": false,
            "title": "As Found / As Left Values",
            "remarks": "Specifies whether As Found values and As Left values for calibration points are editable. If you select Editable when Asset Function Status Calculated, you can edit As Found and As Left values unless the No Adjust Flag has been set. If you select Read-Only when Asset Function Status Calculated, the As Found and As Left values are read-only after the AF status has been calculated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCAPPRTOOLS",
            "required": true,
            "persistent": false,
            "title": "Automatically Approve Tool Transactions",
            "remarks": "Specifies whether you can delete a tool record from a work order after the work order is saved. If you select this check box, the tool record is automatically approved and becomes read only. The check box is selected by default. If you clear this check box, users can remove the tool record from a work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCEDITDATA",
            "required": true,
            "persistent": false,
            "title": "Warning Message for Work Order Data Sheet Changes",
            "remarks": "Specifies whether a warning message is displayed if As Found and As Left readings change in a work order data sheet. If you select this check box, a warning message is displayed. The check box is clear by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCROTASSET",
            "required": true,
            "persistent": false,
            "title": "Validation of Rotating Asset on Work Orders",
            "remarks": "Specifies whether to allow the calibration between two assets. Select No Validation between Rotating Asset and Asset calibrated to allow calibration between two assets. To allow calibration between two assets but show a warning message, Select Validate but with warning message. To prevent the calibration between two assets and show a warning message, select Enforce validation between Rotating Asset and Asset calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JPREVCONTROL",
            "required": false,
            "persistent": false,
            "title": "Revision Control for Job Plans",
            "remarks": "When unchecked Revision Control for Job Plans will be disabled.When checked Revision Control is enabled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USECONDITIONALJP",
            "required": false,
            "persistent": false,
            "title": "Enable Job Plan Conditions",
            "remarks": "Indicates whether to set conditions for the tasks and resources of a job plan. Conditions can be set for tasks, labor, materials, services, and tools. When the specified conditions are met, the component of the job plan will be copied to the work plan. You create the conditions that are used in job plans in the Conditional Expression Manager application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVPOLINERECVCLOSE",
            "required": false,
            "persistent": false,
            "title": "Approve invoice for receipt not required PO Line with receipts completed",
            "remarks": "Controls the approval of invoices with receipt not required lines once the receipts have been completed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRLINEORLOADED",
            "required": false,
            "persistent": false,
            "title": "Use currencylinecost in invoice variance calculation for Contracts",
            "remarks": "Use currencylinecost in invoice variance calculation for Contracts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVREORDERCAT",
            "required": false,
            "persistent": false,
            "title": "Inventory Reorder Flag Rule Behavior",
            "remarks": "This controls the behavior for desktop requisition functionality when searching for storeroom/vendor information. When enabled the functionality will use the earlier business rules of searching for a storeroom or default vendor at the inventory level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMLEVASSETDOCS",
            "required": true,
            "persistent": false,
            "title": "Create asset doclinks at system level",
            "remarks": "Indicates whether asset doclinks are to be created at system level using the Asset object's AssetID attribute. If they are created at the system level, the document links will be maintained when an asset is moved cross-site. The default behavior, common to all versions of Tpae prior to 7.5.0.7, is that asset doclinks use the Asset object's AssetUID attribute and are site-specific. When an asset is moved cross-site, the documents added to the asset in the 'moved from' site cannot be accessed in the 'moved to' site. If the asset is returned to the previous site, the documents will again be accessible. The SYSTEMLEVASSETDOCS maxvar cannot be changed if asset-related doclinks already exist.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LNRASTIGNOREHISTWO",
            "required": true,
            "persistent": false,
            "title": "Ignore history work orders on Start/End change",
            "remarks": "Indicates whether history work orders should be ignored when validating a modification to a linear asset's start or end measure.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWSAMEUPDOWNTM",
            "required": true,
            "persistent": false,
            "title": "Allow contiguous asset downtime cycles",
            "remarks": "Used by Asset Downtime Reporting to make possible a new downtime report cycle that is virtually contiguous to an already-completed cycle. When true, this flag allows an asset to be brought down at virtually the same date/time it was last brought back up. This is done by adding 1 millisecond to the CHANGEDATE on the ASSETSTATUS record that is being added to bring the asset back down and start the new asset down/up report cycle. The default behavior is to not allow the end of one downtime reporting cycle to have the same date and hours/minutes/seconds as the beginning of the next cycle. The default behavior is consistent with all previous versions.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTINVSTATUS",
            "required": false,
            "persistent": false,
            "title": "Default Inventory Status",
            "remarks": "The default inventory status for items added to the storeroom.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SETTOREVERSED",
            "required": false,
            "persistent": false,
            "title": "Original invoice set to reversed when reversal invoice is approved or paid",
            "remarks": "Change status of reversed invoice to reversed when reversal invoice is approved or paid.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTWSTARTAPPR",
            "required": true,
            "persistent": false,
            "title": "Allow Waiting to Start Contract Previous Status to Remain Approved",
            "remarks": "If you enable this option, revised contract will remain as approved until the WSTART revision is approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLSETDATEFP",
            "required": true,
            "persistent": false,
            "title": "Use current date as a transaction date if Financial Period is Closed",
            "remarks": "Use current date as a transaction date if Financial Period is Closed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOLINEARRECALIB",
            "required": true,
            "persistent": false,
            "title": "Propagate reference point measure changes",
            "remarks": "When a reference point measure changes, should the change be propagated to all records that reference it? This process can take a long time to complete.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOCXDATEPMNEXTDATE",
            "required": true,
            "persistent": false,
            "title": "Allow Use of Cancel Date to Calculate PM Next Date on Floating PMs",
            "remarks": "Allow use of cancel date as the basis for updating the PM Next Date on PMs that use completion date when a PM work order is canceled?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STRADDRDETAIL",
            "required": true,
            "persistent": false,
            "title": "Street addresses format",
            "remarks": "Specify that all addresses must conform to the format defined in the Service Address application. Alternatively, specify that addresses are not required to conform to the format defined in the Service Address application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDRMASTER",
            "required": true,
            "persistent": false,
            "title": "Address master",
            "remarks": "The source of address information, for example, the Service Address application or an external geographic information system (GIS) source.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COORDINATE",
            "required": true,
            "persistent": false,
            "title": "Coordinates",
            "remarks": "Select either Latitude and Longitude coordinates or X and Y fields with no data validation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAEDITABLE",
            "required": true,
            "persistent": false,
            "title": "Service Address Editable",
            "remarks": "Different service addresses can be created for child records of assets and locations.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STREETORDERNUM",
            "required": true,
            "persistent": false,
            "title": "Street address format",
            "remarks": "Select the format of the street address fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SAMSGPROMPT",
            "required": false,
            "persistent": false,
            "title": "Warn users when they change inherited service addresses",
            "remarks": "Warns users that they are changing the service address information of the work order or service request that is inherited from a location or asset. If this option is not selected,  users are warned that they are changing the service address information of the location or asset that is associated with the work order or service request. When warned, the user must confirm the service address code of the work order or service request.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMCREWAVAILFACTOR",
            "required": true,
            "persistent": false,
            "title": "Availability Factor",
            "remarks": "This option effects the number of available hours that a resource can be scheduled. The default value is 1.0 which means that 100% of the resource's time is available for scheduling work. For example, set this value to 0.75 if only 6 hours of an 8 hour shift should be scheduled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIMERINPRG",
            "required": true,
            "persistent": false,
            "title": "Automatically change work order status to INPRG when a user starts a labor timer",
            "remarks": "Automatically change work order status to INPRG when a user starts a labor timer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STOPTIMERCOMP",
            "required": false,
            "persistent": false,
            "title": "By default, change the work order status to COMP when a user stops a labor timer",
            "remarks": "By default, change the work order status to COMP when a user stops a labor timer",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": false,
            "title": "Warn if Assigned Outside of Work Zone",
            "remarks": "Indicates if a warning should occur when a labor or crew resource to work outside of its work zone.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EPWRKQUERY",
            "required": false,
            "persistent": false,
            "title": "Everyplace Work Query Options",
            "remarks": "Allow the user to choose a default work order query sorting option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORLOCFILTER",
            "required": false,
            "persistent": false,
            "title": "Labor Location Filter",
            "remarks": "Populate the labor location of the labor lookup with wo location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AUTHCICLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for looking up Classstructure from Authoirzed CI top-tevel class (classstructureid = :authciclass). Returns zero or one record.",
            "whereClause": "classstructureid=:authciclass",
            "cardinality": null
        },
        {
            "name": "CICLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for looking up Classstructure from CI top-tevel class (classstructureid = :ciclass). Returns zero or one record.",
            "whereClause": "classstructureid = :ciclass",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITASSET",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for looking up Classstructure from IT top-tevel class (classstructureid = :itasset). Returns zero or one record.",
            "whereClause": "classstructureid = :itasset",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITSFW",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship for looking up Classstructure from IT Software top-tevel class (classstructureid = :itsfw). Returns zero or one record.",
            "whereClause": "classstructureid = :itsfw",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to Site table. ( site.siteid = maxvarinput.site ). If this is a site-level maxvar, the result set will contain one object.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXVARINPUTNUMTAX",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to the MaxVarInput table to get an instance of the non-pers MaxVarInput mbo for managing system-level Number of Taxes maxvar.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "MAXVARINPUT",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MAXVARINPUT2",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid = organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUT3",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUT4",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTASSET",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTASSIGNMAN",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, to get an instance of the non-pers MaxVarInput mbo for managing system-level Assignment Manager maxvars. This relationship will one object. ",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTDRILLDOWN",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTEP",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MAXVARINPUTGLOBALTK",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent Mbo of MaxVarInput for the organization. (maxvarinput.orgid = organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTINVENTORYCOST",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid = organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTINVENTORYDEFAULTS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid = organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTINVENTORYREORDER",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTOWNERASGN",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTSLA",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVARINPUTSYSTEM",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get an instance of the non-persistent MBO of MaxVarInput for the organization. (maxvarinput.orgid =  organization.orgid). This relationship will find zero or more objects.",
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COPYLABORLOCTOWO",
            "source": "ORGANIZATION",
            "remarks": null,
            "whereClause": "orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCMAXVARINPUT",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the MaxVarInput table, used to get it´s mbo instance for the organization",
            "whereClause": "orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "MAXVARINPUT",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the MaxVarInput Set. This is a special MboSet used for displaying wostatusonasntcomp for a given workorder of an assignment.  wonum in (orgid=:orgid ).  The resulting set will contain zero or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}