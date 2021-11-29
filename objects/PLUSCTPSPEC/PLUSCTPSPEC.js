mos = {
    "objectName": "PLUSCTPSPEC",
    "className": "psdi.plusc.app.plusctmplt.PlusCATSpecSet",
    "description": "Asset Template Spec table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCTPSPECID",
    "primaryKeyColumns": [
        "ASSETATTRID",
        "ORGID",
        "SECTION",
        "TEMPLATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "PLUSCTPSPEC",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Class Structure",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCTPSPEC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ALNVALUE",
            "required": false,
            "persistent": true,
            "title": "Alphanumeric Value",
            "remarks": "Provides text details of the attribute. If the Data Type field specifies ALN, then this field is enabled.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "ASSETATTRID",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "The attribute or characteristic of the asset specification template, such as material, size, model, and so on.",
            "sameAsAttribute": "ASSETATTRID",
            "sameAsObject": "ASSETATTRIBUTE"
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": true,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Classification for assets based on the template. Note: When you apply the template, data in the Classification field on existing assets is replaced with data from this field. Specification data associated with the classification is also  replaced. If this field is blank, the content of the Classification field on existing asset records not changed.",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "MEASUREUNITID",
            "required": false,
            "persistent": true,
            "title": "Unit of Measure",
            "remarks": "The unit of measure for the attribute.",
            "sameAsAttribute": "MEASUREUNITID",
            "sameAsObject": "MEASUREUNIT"
        },
        {
            "attributeName": "NUMVALUE",
            "required": false,
            "persistent": true,
            "title": "Numeric Value",
            "remarks": "Provides numeric details of the attribute. If the Data Type field specifies NUM, then this field is enabled.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "NUMERICDOMAIN"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifies the organization.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SECTION",
            "required": false,
            "persistent": true,
            "title": "Section",
            "remarks": "Section or major element for a group of asset attributes. For example, a specification for a truck might have sections such as engine, transmission, and final drive. Using multiple sections for a specification for an asset lets you use multiple instances of attributes such as \"make\" and \"model,\" once for each section.",
            "sameAsAttribute": "SECTION",
            "sameAsObject": "CLASSSPEC"
        },
        {
            "attributeName": "TEMPLATEID",
            "required": true,
            "persistent": true,
            "title": "Template",
            "remarks": "Identifies the asset template.",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "TABLEVALUE",
            "required": false,
            "persistent": true,
            "title": "Table Value",
            "remarks": "The value from the table specified in the DOMAIN where the domaintype and datatype is TABLE.",
            "sameAsAttribute": "TABLEVALUE",
            "sameAsObject": "ASSETSPEC"
        },
        {
            "attributeName": "MANDATORY",
            "required": true,
            "persistent": true,
            "title": "Mandatory?",
            "remarks": "This checkbox indicates if the value is required.",
            "sameAsAttribute": "MANDATORY",
            "sameAsObject": "ASSETSPEC"
        },
        {
            "attributeName": "PLUSCTPSPECID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETATTRIBUTE",
            "target": "ASSETATTRIBUTE",
            "remarks": "relationship to the assetattribute table (plusctpspec.assetattrid = assetattribute.assetattrid)",
            "whereClause": "assetattrid = :assetattrid",
            "cardinality": null
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to CLASSSPEC table",
            "whereClause": "classstructureid =:classstructureid and assetattrid=:assetattrid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCTPSPEC",
            "source": "PLUSCTEMPLATE",
            "remarks": "relationship to the plusctpspec table (plusctpspec.templateid = plusctemplate.templateid and plusctpspec.orgid = plusctemplate.orgid",
            "whereClause": "templateid = :templateid and orgid = :orgid",
            "cardinality": null
        }
    ]
}