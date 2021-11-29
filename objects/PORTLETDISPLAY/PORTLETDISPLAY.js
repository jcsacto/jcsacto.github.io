mos = {
    "objectName": "PORTLETDISPLAY",
    "className": "psdi.app.scconfig.PortletDisplaySet",
    "description": "Portlet Display",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PORTLETDISPLAYID",
    "primaryKeyColumns": [
        "PORTLETDISPLAYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "PORTLETDISPLAY",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Portlet Master Table to the Start Center Layout",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PORTLETDISPLAYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPRESSION",
            "required": false,
            "persistent": true,
            "title": "Expression",
            "remarks": "The mathematical expression used to set the condition. Values are: less than, equal to, less than or equal to, greater than, and greater than or equal to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPVALUE",
            "required": false,
            "persistent": true,
            "title": "Expression Value",
            "remarks": "The value that the expression triggers on. For example, if you set an expression of greater than and a value of 100, the condition is set for any value above 100 but will not trigger on 100.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLOR",
            "required": false,
            "persistent": true,
            "title": "Color",
            "remarks": "The color the line item displays in when the trigger set by the expression and the value has been met.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Portlet Id",
            "remarks": "Portlet Id",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to the return the maxvalue of a given express for portlet display. The result set will contain one object.",
            "whereClause": "domainid='EXPRESSION' and value = :expression",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PORTLET_DISPLAY",
            "source": "LAYOUT",
            "remarks": "Relationship to PORTLETDISPLAY table. The result set will contain zero or more objects",
            "whereClause": "layoutid =:layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}