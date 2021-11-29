mos = {
    "objectName": "OSLCRESOURCE",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcResourceSet",
    "description": "Table for oslc resource",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCRESOURCEID",
    "primaryKeyColumns": [
        "INTOBJECTNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCRESOURCE",
            "targetObject": "OSLCRESOURCEDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource Details",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "OSLCDOMAIN",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "DOMAINNAME",
            "targetKeys": "DOMAINNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "OSLC Domain",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCNSURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCUSAGEURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Usage Namespace",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCRESOURCE",
            "parentKeys": "NSURI",
            "targetKeys": "DFLTNSURI",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Namespace",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Identifies the object structure to which the OSLC resource belongs. This value must be unique and the object structure can be tied only to one resource.",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OSLCNAME",
            "required": true,
            "persistent": true,
            "title": "OSLC Resource Name",
            "remarks": "The name of the OSLC resource.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCNSURI",
            "required": false,
            "persistent": true,
            "title": "Namespace URI",
            "remarks": "When populated, this value is the namespace for the resource. The namespaces are used for common resources that are not associated with any OSLC domain.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "DOMAINNAME",
            "required": false,
            "persistent": true,
            "title": "Domain Name",
            "remarks": "The OSLC domain to which the resource belongs.",
            "sameAsAttribute": "DOMAINNAME",
            "sameAsObject": "OSLCDOMAIN"
        },
        {
            "attributeName": "OSLCUSAGEURI",
            "required": false,
            "persistent": true,
            "title": "OSLC Usage URI",
            "remarks": "An identifier URI for the domain that specified the usage of the resource.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "DEFAULTUSAGE",
            "required": true,
            "persistent": true,
            "title": "Is Default Usage",
            "remarks": "Identifies the object structure as the default object structure for this resource.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCSPATTR",
            "required": false,
            "persistent": true,
            "title": "Service Provider Attribute",
            "remarks": "Service Provider Attribute.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OSLCRESOURCEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTPAGESIZE",
            "required": false,
            "persistent": true,
            "title": "Default Page Size",
            "remarks": "When you query a resource collection, the page size determines the number of member resources that are returned on each page.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CACHE",
            "required": true,
            "persistent": true,
            "title": "Enable Caching",
            "remarks": "Enable Caching",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTNSURI",
            "required": true,
            "persistent": true,
            "title": "Default Namespace URI",
            "remarks": "Any property that is not explicitly mapped to a namespace belongs to the default namespace.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "IDASURI",
            "required": true,
            "persistent": true,
            "title": "Use Unique ID For URI",
            "remarks": "If the check box is selected, the unique ID value is used as the resource URI.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the resource.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ETAGUPDATECOL",
            "required": false,
            "persistent": true,
            "title": "ETag Update Attribute",
            "remarks": "The column of the primary object for the resource that is updated when a child object modification does not update the primary object. The child object is defined as a local resource.",
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
        },
        {
            "attributeName": "OSLCSEARCHATTRS",
            "required": false,
            "persistent": true,
            "title": "Searchable Attributes",
            "remarks": "A comma-separated list of columns from the primary object of the resource that are defined as text searchable. This list of columns are available for OSLC text search.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYQUERIES",
            "required": true,
            "persistent": false,
            "title": "Copy queries",
            "remarks": "Should original application queries be copied over automatically",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relation to get Object Struture description. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "OSLCDOMAIN",
            "target": "OSLCDOMAIN",
            "remarks": "Relation to get all OSLC Resource details. This relationship returns one or more rows.",
            "whereClause": "domainname=:domainname",
            "cardinality": null
        },
        {
            "name": "OSLCKEYMAP",
            "target": "OSLCKEYMAP",
            "remarks": "Relation to OSLC Key Map Non-persistent Object.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "OSLCQUERY",
            "target": "OSLCQUERY",
            "remarks": "Relationship to OSLC Query Definition entries",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "OSLCRESOURCEDETAIL",
            "target": "OSLCRESOURCEDETAIL",
            "remarks": "Relation to get all OSLC Resource details. This relationship returns one or more rows.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCRESOURCE",
            "source": "MAXINTOBJECT",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "OSLCRESOURCE",
            "source": "OSLCQUERY",
            "remarks": "Finds the OSLC resource holder for query",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ]
}