mos = {
    "objectName": "SEARCHATTRIBUTE",
    "className": "psdi.app.assetcatalog.virtual.SearchAttributeSet",
    "description": "Non-persistent table for attribute search",
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
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Attribute",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": false,
            "title": "Section",
            "remarks": "Section for a group of attributes",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "DATATYPE",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "Data Type for attribute value",
            "sameAsAttribute": "DATATYPE",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": false,
            "title": "Alphanumeric(text) value",
            "remarks": "Alphanumeric(text) value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": false,
            "title": "Numeric value",
            "remarks": "Numeric value in entered units",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": false,
            "title": "Table Value",
            "remarks": "Value in the table specified",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPECVALUE",
            "required": false,
            "persistent": false,
            "title": "Spec Value",
            "remarks": "For value search of ALN, NUMERIC, and TABLE types",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site Id",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "Default Domain for the attribute",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "TABLENAME",
            "required": false,
            "persistent": false,
            "title": "Table Name",
            "remarks": "Table Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ASSETATTRIBUTEID",
            "required": false,
            "persistent": false,
            "title": "Attribute Unique ID",
            "remarks": "Asset Attribute Identifier",
            "sameAsAttribute": "ASSETATTRIBUTEID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "LOOKUPNAME",
            "required": false,
            "persistent": false,
            "title": "Lookup Name",
            "remarks": "Lookup name for the table domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABLEATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Table Attribute",
            "remarks": "The attribute name for the table domain entered.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}