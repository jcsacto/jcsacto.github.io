mos = {
    "objectName": "MAXIFACETYPEPROP",
    "className": "psdi.iface.app.intsrv.MaxIfaceTypePropSet",
    "description": "Iface Type Properties",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACETYPEPROPID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PARAM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACETYPEPROP",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXIFACETYPEPROPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARAM",
            "required": true,
            "persistent": true,
            "title": "Property",
            "remarks": "A required field in an inbound XML message. Use the corresponding Value and XML Tag? Fields to identify the location of the field within the XML message or to assign a hard coded value to the field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISXMLTAG",
            "required": true,
            "persistent": true,
            "title": "XML Tag",
            "remarks": "Specifies whether the corresponding value is a user-specified value or the name of an XML tag. If the check box is selected, the value is the name of an XML tag. If the Value field is empty, the MEA assumes the value is in the root node. The XML name must be qualified with the namespace, if applicable.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "A user-specified value for the corresponding property, or the name of the XML tag containing the value for the corresponding property. If the latter, select the XML Tag? check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Enterprise Service Name",
            "remarks": "ifacename",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXIFACETYPEPROP",
            "source": "MAXIFACEIN",
            "remarks": "Relationship MAXIFACETYPEPROP table, used to find gateway properties . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}