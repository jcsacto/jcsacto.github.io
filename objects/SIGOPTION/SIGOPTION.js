mos = {
    "objectName": "SIGOPTION",
    "className": "psdi.app.signature.SigOptionSet",
    "description": "The SIGOPTION Table",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SIGOPTIONID",
    "primaryKeyColumns": [
        "APP",
        "OPTIONNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "SIGOPTION",
            "targetObject": "ACTIONSCFG",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Option required for Action",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "APPLICATIONAUTH",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "CTRLGROUP",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action Controlled",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "EXCLUDEDACTIONS",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action not available in Quick Insert Portlet",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, DIALOGID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, MAPOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Option to Launch Interaction.",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "MAXSERVSECURITY",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, MAPOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, SIGOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSOSLCACTION",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Option",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "SIGOPTFLAG",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APP, OPTIONNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Action flagged.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "SIGOPTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "SIGOPTION",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Security Options defined for an application.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Signature Option Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "OPTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Option",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Signature Option Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ESIGENABLED",
            "required": true,
            "persistent": true,
            "title": "E-signature Enabled",
            "remarks": "Indicates Electronic signature (ESIG) is enabled for this function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VISIBLE",
            "required": true,
            "persistent": true,
            "title": "Visible",
            "remarks": "Indicates whether this sigoption can be granted via the Security Groups application. It will be visible and grantable if the value is 1 and not visible if the value is 0. If it is not visible, it should be granted and revoked along with another application by listing it in the ALSOGRANTS and ALSOREVOKES columns.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALSOGRANTS",
            "required": false,
            "persistent": true,
            "title": "Option Also Grants",
            "remarks": "List of other sigoptions that will be automatically granted when this sigoption is selected",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALSOREVOKES",
            "required": false,
            "persistent": true,
            "title": "Option Also Revokes",
            "remarks": "List of other sigoptions that will be automatically revoked when this sigoption is deselected",
            "sameAsAttribute": "ALSOGRANTS",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "PREREQUISITE",
            "required": false,
            "persistent": true,
            "title": "Prerequisite",
            "remarks": "List of other sigoptions that must be selected before this sigoption can be selected",
            "sameAsAttribute": "ALSOGRANTS",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Signature Option Option Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTIONID",
            "required": true,
            "persistent": true,
            "title": "SIGOPTIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Group",
            "remarks": "GroupName for use when owner is MaxGroup",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "AUTHORIZED",
            "required": true,
            "persistent": false,
            "title": "Grant Access",
            "remarks": "For use in the Security Groups app to define access",
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
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": false,
            "title": "Condition",
            "remarks": "Non-persistent field used by the Security Groups application to populate restrictions assigned to a Security Group that are eventually stored in the APPLICATIONAUTH table.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Application authorities for this SigOption",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPLICATIONAUTHUI",
            "target": "APPLICATIONAUTH",
            "remarks": "Relationship for Sigoption to ApplicationAuth when non-persistent attribute Groupname is not null",
            "whereClause": "groupname = :groupname and app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from SigOption to Condition",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the conditions for a given sigoption. (ctrlgroup.app=:app$SIGOPTION.APP and ctrlgroup.optionname=:optionname$SIGOPTION.OPTIONNAME). The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from SIGOPTION.",
            "whereClause": "ldkey=:sigoptionid and ldownertable = 'SIGOPTION'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship to MaxApps table. (maxapps.app = sigoption.app). The result set will normally contain one object, assuming the app exists in only one module.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTFLAG",
            "target": "SIGOPTFLAG",
            "remarks": "Relationship to the SIGOPTFLAG table, used to find a flag for the sigoption given app and optionname values. The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTFLAGDLG",
            "target": "SIGOPTFLAGDLGPRX",
            "remarks": "Used to link the dialog proxy to the Advanced Sigoption Flag dialog",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ACTION_SIGOPTION",
            "source": "ACTIONSCFG",
            "remarks": "Relationship to the SIGOPTION table, used to find information for given app and optioname. The resulting set will contain one object.",
            "whereClause": "app=:app and optionname=:optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "APPLICATIONAUTH",
            "remarks": "SigOption related to this ApplicationAuth",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_ACTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_action.app and sigoption.optionname=ctrl_action.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_APPBAR",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_appbar.app and sigoption.optionname=ctrl_appbar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_ATTACHDOC",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_attachdoc.app and sigoption.optionname=ctrl_attachdoc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_ATTACHMENTS",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_attachments.app and sigoption.optionname=ctrl_attachments.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_BLANKLINE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_blankline.app and sigoption.optionname=ctrl_blankline.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_BUTTONGROUP",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_buttongroup.app and sigoption.optionname=ctrl_buttongroup.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_CHECKBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_checkbox.app and sigoption.optionname=ctrl_checkbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_CLIENTAREA",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_clientarea.app and sigoption.optionname=ctrl_clientarea.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_COMBOBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_combobox.app and sigoption.optionname=ctrl_combobox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_CTCONTAINER",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_ctcontainer.app and sigoption.optionname=ctrl_ctcontainer.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_DATASRC",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_datasrc.app and sigoption.optionname=ctrl_datasrc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_DEFAULT",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_default.app and sigoption.optionname=ctrl_default.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_DIALOG",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_dialog.app and sigoption.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_DISPLAYRULE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_displayrule.app and sigoption.optionname=ctrl_displayrule.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_DOCLINKBTN",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_doclinkbtn.app and sigoption.optionname=ctrl_doclinkbtn.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_EXACT",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_exact.app and sigoption.optionname=ctrl_exact.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_HELPGRID",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_helpgrid.app and sigoption.optionname=ctrl_helpgrid.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_HYPERLINK",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_hyperlink.app and sigoption.optionname=ctrl_hyperlink.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_IMAGE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_image.app and sigoption.optionname=ctrl_image.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_INCLUDE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_include.app and sigoption.optionname=ctrl_include.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_KPIGRAPH",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_kpigraph.app and sigoption.optionname=ctrl_kpigraph.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_LISTBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_listbox.app and sigoption.optionname=ctrl_listbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_MENUBAR",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_menubar.app and sigoption.optionname=ctrl_menubar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_MLNETEXTBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_mlnetextbox.app and sigoption.optionname=ctrl_mlnetextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_MPRTTEXTBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_mprttextbox.app and sigoption.optionname=ctrl_mprttextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_PAGE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_page.app and sigoption.optionname=ctrl_page.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_PARAMVALUE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_paramvalue.app and sigoption.optionname=ctrl_paramvalue.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_PARAMVALUES",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_paramvalues.app and sigoption.optionname=ctrl_paramvalues.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_PRESENTATIO",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_presentatio.app and sigoption.optionname=ctrl_presentatio.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_PUSHBUTTON",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_pushbutton.app and sigoption.optionname=ctrl_pushbutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_RADIOBTNGRP",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_radiobtngrp.app and sigoption.optionname=ctrl_radiobtngrp.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_RADIOBUTTON",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_radiobutton.app and sigoption.optionname=ctrl_radiobutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_RANGE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_range.app and sigoption.optionname=ctrl_range.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_RECORDIMAGE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_recordimage.app and sigoption.optionname=ctrl_action.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_RICHTEXTEDITOR",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_richtexteditor.app and sigoption.optionname=ctrl_richtexteditor.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_SECTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_section.app and sigoption.optionname=ctrl_section.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_SECTIONCOL",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_sectioncol.app and sigoption.optionname=ctrl_sectioncol.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_SECTIONHDR",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_sectionhdr.app and sigoption.optionname=ctrl_sectionhdr.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_SECTIONROW",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_sectionrow.app and sigoption.optionname=ctrl_sectionrow.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_STATICTEXT",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_statictext.app and sigoption.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_SYSTEMPROP",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_systemprop.app and sigoption.optionname=ctrl_systemprop.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TAB",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_statictext.app and sigoption.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TABGROUP",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_tabgroup.app and sigoption.optionname=ctrl_tabgroup.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TABLE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_table.app and sigoption.optionname=ctrl_table.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TABLEBODY",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_tablebody.app and sigoption.optionname=ctrl_tablebody.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TABLECOLUMN",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_tablecolumn.app and sigoption.optionname=ctrl_tablecolumn.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TEXTBOX",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_textbox.app and sigoption.optionname=ctrl_textbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TREE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_tree.app and sigoption.optionname=ctrl_tree.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TREEATTRIB",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_treeattrib.app and sigoption.optionname=ctrl_treeattrib.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_TREENODE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_treenode.app and sigoption.optionname=ctrl_treenode.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_UPLOADFILE",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_uploadfile.app and sigoption.optionname=ctrl_uploadfile.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRL_WALLCALENDR",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_wallcalendr.app and sigoption.optionname=ctrl_wallcalendr.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "CTRLGROUP",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control group. (sigoption.app=ctrlgroup.app and sigoption.optionname=ctrlgroup.optionname). The resulting set will contain one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "MAXAPPS",
            "remarks": "Relationship to SigOption table by app, used to find security ooptions for an application. ( sigoption.app = maxapps.app ). This relationship will find 1 or more objects.",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOWITHOUTREAD",
            "source": "MAXAPPS",
            "remarks": "Maxapps to Sigoption, not including the READ option.  This relationship is used for the ESig menu option in the DB Configure application.",
            "whereClause": "app = :app and optionname != 'READ'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOMAIN",
            "source": "MAXAPPS",
            "remarks": "Maxapps to Sigoption for optionnames Read, Insert, Save, and Delete",
            "whereClause": "app = :app and optionname in ('READ','INSERT','SAVE','DELETE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOOTHER",
            "source": "MAXAPPS",
            "remarks": "Maxapps to Sigoption for optionnames other than Read, Insert, Save, and Delete and visible is true",
            "whereClause": "app = :app and optionname not in ('READ','INSERT','SAVE','DELETE') and visible = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOOTHER2",
            "source": "MAXAPPS",
            "remarks": "Maxapps to Sigoption for optionnames other than Read, Insert, Save, and Delete and visible is false",
            "whereClause": "app = :app and optionname not in ('READ','INSERT','SAVE','DELETE') and visible = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "MAXINTERACTION",
            "remarks": "Relationship to get sigoption information",
            "whereClause": "app=:appname and optionname=:mapoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "MAXMENU",
            "remarks": "MaxMenu to SigOption for elementtype OPTION",
            "whereClause": "APP = :MODULEAPP AND OPTIONNAME = :KEYVALUE",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "APPSIGOPTION",
            "source": "MAXMENU",
            "remarks": "MaxMenu to SigOption for apps (appaccess)",
            "whereClause": ":elementtype ='APP' and app = :keyvalue and optionname = 'READ'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get Sigoption desricption. This relation will return 1 row.",
            "whereClause": "app=:appname and optionname = :mapoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Display Signature Option. THis relationship will return one row",
            "whereClause": "optionname=:sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "source": "SIGOPTFLAG",
            "remarks": "Relationship to the SIGOPTION table, used to find a flag for the sigoption given app and optionname values. The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ]
}