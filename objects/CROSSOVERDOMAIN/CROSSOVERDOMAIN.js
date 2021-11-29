mos = {
    "objectName": "CROSSOVERDOMAIN",
    "className": "psdi.app.system.CrossoverDomainSet",
    "description": "Table for user database crossover fields",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CROSSOVERDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "SOURCEFIELD",
        "DESTFIELD",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "DESTCONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Condition",
            "longDescription": null
        },
        {
            "objectName": "CONDITION",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "SOURCECONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Condition",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crossover Domain Details",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Domain Id for CrossOver fields",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "SOURCEFIELD",
            "required": true,
            "persistent": true,
            "title": "Source Field",
            "remarks": "Field from which a user will copy the database field value",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DESTFIELD",
            "required": true,
            "persistent": true,
            "title": "Destination Field",
            "remarks": "Field to which a user will copy the database field value",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site for which the domain value is specified",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization for which the domain value is specified",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CROSSOVERDOMAINID",
            "required": true,
            "persistent": true,
            "title": "CROSSOVERDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYEVENIFSRCNULL",
            "required": true,
            "persistent": true,
            "title": "Accept NULL value",
            "remarks": "Boolean value, if true, the destination attribute will also be set to NULL when the source attribute is NULL or empty. If false, the destination attribute will be left as what it is when the source attribute is NULL or empty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COPYONLYIFDESTNULL",
            "required": true,
            "persistent": true,
            "title": "No Overwrite",
            "remarks": "Boolean value, when it is true, the value of the source attribute will only be set to destination attribute when the destination attribute's value is NULL or empty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESTCONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition on Destination",
            "remarks": "Reference to the CONDITION object. The condition of whether to copy the value from source to destination. The condition is evaluated against the destination object. Only if this yields to true, the copy can be carried out.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "SOURCECONDITION",
            "required": false,
            "persistent": true,
            "title": "Condition on Source",
            "remarks": "Reference to the CONDITION object. The condition of whether to copy the value from source to destination. The condition is evaluated against the source object. Only if this yields to true, the copy can be carried out.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence",
            "remarks": "The sequence of setting the attributes. It will be defaulted to 10, 20 etc. when the record is added. The field is still null-able.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DESTCONDITION",
            "target": "CONDITION",
            "remarks": "Relationship to the condition table, used to find the condition object of the destination condition on crossover domain.",
            "whereClause": "conditionnum=:destcondition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRCCONDITION",
            "target": "CONDITION",
            "remarks": "Relationship to the condition table, used to find the condition object of the source condition on crossover domain.",
            "whereClause": "conditionnum=:sourcecondition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to  MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'CROSSOVER')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid='DOMTYPE' and maxvalue = 'CROSSOVER')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CROSSOVERDOMAIN",
            "source": "MAXDOMAIN",
            "remarks": "Relationship to CrossoverDomain table. (crossoverdomain.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'CROSSOVER')). If this is a crossover domain, the result set will contain one object.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CROSSOVERDOMAIN",
            "source": "MAXTABLEDOMAIN",
            "remarks": null,
            "whereClause": "domainid = :domainid and ((siteid is null and (:siteid ='' or :siteid is null))or siteid=:siteid) and ((orgid is null and (:orgid ='' or :orgid is null)) or orgid=:orgid)",
            "cardinality": "UNDEFINED"
        }
    ]
}