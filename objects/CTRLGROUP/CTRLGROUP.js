mos = {
    "objectName": "CTRLGROUP",
    "className": "psdi.app.appsetup.CtrlGroupSet",
    "description": "Control level sigoption",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CTRLGROUPID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "OPTIONNAME",
        "APP"
    ],
    "logicalRelationships": [
        {
            "objectName": "CTRLGROUP",
            "targetObject": "CTRLCONDITION",
            "parentKeys": "CTRLGROUPID",
            "targetKeys": "CTRLGROUPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Control Group",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "CTRLGROUP",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "CTRLGROUP",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Group",
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
        }
    ],
    "columns": [
        {
            "attributeName": "CTRLGROUPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Specify the groups that you want to provide with access to the control.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "OPTIONNAME",
            "required": true,
            "persistent": true,
            "title": "Option",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "GROUPSEQ",
            "required": true,
            "persistent": true,
            "title": "Group Sequence",
            "remarks": "Group Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLCONDITION",
            "target": "CTRLCONDITION",
            "remarks": "Relationship to the CTRLCONDITION table, used to find control condition for a given control group. (ctrlcondition.ctrlgroupid=:ctrlgroup$CTRLGROUP.CTRLGROUPID). The resulting set will contain zero or more objects.",
            "whereClause": "ctrlgroupid = :ctrlgroupid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find the current group. (maxgroup.groupname = ctrlgroup.groupname). The resulting set will contain zero or one object.",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUPSELECT",
            "target": "MAXGROUP",
            "remarks": "Relationship to the MAXGROUP table, used to find all groups. (1=1). The resulting set will contain zero or more objects.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control group. (sigoption.app=ctrlgroup.app and sigoption.optionname=ctrlgroup.optionname). The resulting set will contain one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CTRLGROUP",
            "source": "CTRL_ACTION",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_action.app and ctrlgroup.optionname=ctrl_action.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_APPBAR",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_appbar.app and ctrlgroup.optionname=ctrl_appbar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_ATTACHDOC",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_attachdoc.app and ctrlgroup.optionname=ctrl_attachdoc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_ATTACHMENTS",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_attachments.app and ctrlgroup.optionname=ctrl_attachments.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_BLANKLINE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_blankline.app and ctrlgroup.optionname=ctrl_blankline.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_BUTTONGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_buttongroup.app and ctrlgroup.optionname=ctrl_buttongroup.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_CHECKBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_checkbox.app and ctrlgroup.optionname=ctrl_checkbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_CLIENTAREA",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_clientarea.app and ctrlgroup.optionname=ctrl_clientarea.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_COMBOBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_combobox.app and ctrlgroup.optionname=ctrl_combobox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_CTCONTAINER",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_ctcontainer.app and ctrlgroup.optionname=ctrl_ctcontainer.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_DATASRC",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_datasrc.app and ctrlgroup.optionname=ctrl_datasrc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_DEFAULT",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_default.app and ctrlgroup.optionname=ctrl_default.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_DIALOG",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_dialog.app and ctrlgroup.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_DISPLAYRULE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_displayrule.app and ctrlgroup.optionname=ctrl_displayrule.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_DOCLINKBTN",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_doclinkbtn.app and ctrlgroup.optionname=ctrl_doclinkbtn.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_EXACT",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_exact.app and ctrlgroup.optionname=ctrl_exact.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_HELPGRID",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_helpgrid.app and ctrlgroup.optionname=ctrl_helpgrid.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_HYPERLINK",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_hyperlink.app and ctrlgroup.optionname=ctrl_hyperlink.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_IMAGE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_image.app and ctrlgroup.optionname=ctrl_image.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_INCLUDE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_include.app and ctrlgroup.optionname=ctrl_include.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_KPIGRAPH",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_kpigraph.app and ctrlgroup.optionname=ctrl_kpigraph.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_LISTBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_listbox.app and ctrlgroup.optionname=ctrl_listbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_MENUBAR",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_menubar.app and ctrlgroup.optionname=ctrl_menubar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_MLNETEXTBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_mlnetextbox.app and ctrlgroup.optionname=ctrl_mlnetextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_MPRTTEXTBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_mprttextbox.app and ctrlgroup.optionname=ctrl_mprttextbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_PAGE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_page.app and ctrlgroup.optionname=ctrl_page.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_PARAMVALUE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_paramvalue.app and ctrlgroup.optionname=ctrl_paramvalue.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_PARAMVALUES",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_paramvalues.app and ctrlgroup.optionname=ctrl_paramvalues.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_PRESENTATIO",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_presentatio.app and ctrlgroup.optionname=ctrl_presentatio.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_PUSHBUTTON",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_pushbutton.app and ctrlgroup.optionname=ctrl_pushbutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_RADIOBTNGRP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_radiobtngrp.app and ctrlgroup.optionname=ctrl_radiobtngrp.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_RADIOBUTTON",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_radiobutton.app and ctrlgroup.optionname=ctrl_radiobutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_RANGE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_range.app and ctrlgroup.optionname=ctrl_range.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_RECORDIMAGE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_recordimage.app and ctrlgroup.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_RICHTEXTEDITOR",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_richtexteditor.app and ctrlgroup.optionname=ctrl_richtexteditor.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_SECTION",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_section.app and ctrlgroup.optionname=ctrl_section.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_SECTIONCOL",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_sectioncol.app and ctrlgroup.optionname=ctrl_sectioncol.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_SECTIONHDR",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_sectionhdr.app and ctrlgroup.optionname=ctrl_sectionhdr.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_SECTIONROW",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_sectionrow.app and ctrlgroup.optionname=ctrl_sectionrow.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_STATICTEXT",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_statictext.app and ctrlgroup.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_SYSTEMPROP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_systemprop.app and ctrlgroup.optionname=ctrl_systemprop.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TAB",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_statictext.app and ctrlgroup.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TABGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_tabgroup.app and ctrlgroup.optionname=ctrl_tabgroup.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TABLE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_table.app and ctrlgroup.optionname=ctrl_table.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TABLEBODY",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_tablebody.app and ctrlgroup.optionname=ctrl_tablebody.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TABLECOLUMN",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_tablecolumn.app and ctrlgroup.optionname=ctrl_tablecolumn.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TEXTBOX",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_textbox.app and ctrlgroup.optionname=ctrl_textbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TREE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_tree.app and ctrlgroup.optionname=ctrl_tree.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TREEATTRIB",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_treeattrib.app and ctrlgroup.optionname=ctrl_treeattrib.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_TREENODE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_treenode.app and ctrlgroup.optionname=ctrl_treenode.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_UPLOADFILE",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_uploadfile.app and ctrlgroup.optionname=ctrl_uploadfile.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "CTRL_WALLCALENDR",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_wallcalendr.app and ctrlgroup.optionname=ctrl_wallcalendr.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "MAXGROUP",
            "remarks": "Relationship from MaxGroup to CtrlGroup",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CTRLGROUP",
            "source": "SIGOPTION",
            "remarks": "Relationship to the CTRLGROUP table, used to find the conditions for a given sigoption. (ctrlgroup.app=:app$SIGOPTION.APP and ctrlgroup.optionname=:optionname$SIGOPTION.OPTIONNAME). The resulting set will contain zero or one object.",
            "whereClause": "app = :app and optionname = :optionname",
            "cardinality": "UNDEFINED"
        }
    ]
}