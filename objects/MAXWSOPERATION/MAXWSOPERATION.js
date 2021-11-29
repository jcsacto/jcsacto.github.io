mos = {
    "objectName": "MAXWSOPERATION",
    "className": "psdi.iface.app.wsregistry.MaxWSOperationSet",
    "description": "Web Service Operations",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "WSNAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "WS Name",
            "sameAsAttribute": "WSNAME",
            "sameAsObject": "MAXWSREGISTRY"
        },
        {
            "attributeName": "OPERATION",
            "required": false,
            "persistent": false,
            "title": "WSDL Operation",
            "remarks": "Name of the WSDL operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUT",
            "required": false,
            "persistent": false,
            "title": "Input Element",
            "remarks": "Input element of the WSDL operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUT",
            "required": false,
            "persistent": false,
            "title": "Output Element",
            "remarks": "Output element of the WSDL operation.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXWSREGISTRY"
        },
        {
            "attributeName": "SERVICENAME",
            "required": false,
            "persistent": false,
            "title": "Service Name",
            "remarks": "Service Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": false,
            "persistent": false,
            "title": "External System",
            "remarks": "Extrnal System",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": false,
            "persistent": false,
            "title": "Message Type",
            "remarks": "Message Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "XMLDATA",
            "required": false,
            "persistent": false,
            "title": "XML Data",
            "remarks": "XML Data",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPONSEDATA",
            "required": false,
            "persistent": false,
            "title": "Response XML",
            "remarks": "Response XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXWSOPERATION",
            "source": "MAXWSREGISTRY",
            "remarks": "Relationship to the MAXWSOPERATION table, used to find all operations for webservice . The resulting set will contain one row.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}