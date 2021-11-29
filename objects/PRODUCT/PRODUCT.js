mos = {
    "objectName": "PRODUCT",
    "className": "psdi.app.dbchange.ProductSet",
    "description": "MAXIMO Product table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRODUCTID",
    "primaryKeyColumns": [
        "PRODUCT"
    ],
    "logicalRelationships": [
        {
            "objectName": "PRODUCT",
            "targetObject": "PREFIXPRODUCT",
            "parentKeys": "PRODUCT",
            "targetKeys": "PRODUCT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "PRODUCT",
            "targetObject": "PRODUCTPREFIX",
            "parentKeys": "PRODUCT",
            "targetKeys": "PRODUCT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "PRODUCT",
            "targetObject": "PROJECT",
            "parentKeys": "PRODUCT",
            "targetKeys": "PRODUCT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PRODUCT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 158",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRODUCT",
            "required": true,
            "persistent": true,
            "title": "Product ID",
            "remarks": "Product Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Product Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASEMANAGER",
            "required": false,
            "persistent": true,
            "title": "Release Manager",
            "remarks": "Who is the Release Manager?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTLEAD",
            "required": false,
            "persistent": true,
            "title": "Product Manager Lead",
            "remarks": "Who is the Product Manager Lead?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTMANAGER",
            "required": false,
            "persistent": true,
            "title": "Product Manager",
            "remarks": "Who is the Product Manager?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTID",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PROJECT",
            "target": "PROJECT",
            "remarks": "Projects for this product",
            "whereClause": "product = :product",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}