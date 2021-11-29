mos = {
    "objectName": "CTRL_BREADCRUMBS",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Breadcrumbs Control",
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
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control Id",
            "remarks": "Control Id",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "BEANCLASS",
            "required": false,
            "persistent": false,
            "title": "Bean Class",
            "remarks": "Bean Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "MBONAME",
            "required": false,
            "persistent": false,
            "title": "Business Object",
            "remarks": "Business Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": false,
            "title": "CSS Class Name",
            "remarks": "CSS Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "CTRL_HYPERLINK"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": false,
            "title": "Label",
            "remarks": "Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "SEPARATOR",
            "required": false,
            "persistent": false,
            "title": "Separator",
            "remarks": "Separator",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONSHIP",
            "required": false,
            "persistent": false,
            "title": "Relationship",
            "remarks": "Relationship",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "BREADCRUMBSOURCEID",
            "required": true,
            "persistent": false,
            "title": "BreadCrumbs Source Id",
            "remarks": "Breadrumb Source ID, Id of the Tree Control or DataBean",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "SOURCEMETHOD",
            "required": false,
            "persistent": false,
            "title": "Source Method",
            "remarks": "The method which will be called on the object of source id, that will returns breadcrums data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIGN",
            "required": false,
            "persistent": false,
            "title": "Align",
            "remarks": "Align",
            "sameAsAttribute": "ALIGN",
            "sameAsObject": "CTRL_STATICTEXT"
        },
        {
            "attributeName": "MSGGROUP",
            "required": false,
            "persistent": false,
            "title": "Message Group",
            "remarks": "Message Group from MAXMESSAGES",
            "sameAsAttribute": "MSGGROUP",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "MSGKKEY",
            "required": false,
            "persistent": false,
            "title": "Message Key",
            "remarks": "Message Key in MAXMESSAGES",
            "sameAsAttribute": "MSGKEY",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option Name",
            "remarks": "Signature Option Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "SIGOPTIONDATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source Id",
            "remarks": "Data Source Id",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}