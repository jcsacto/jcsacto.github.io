mos = {
    "objectName": "ORGFILTER",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Org Restriction Filter View",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "USERID",
        "APP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "ORGFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ORGFILTER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ORGFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "SITEAUTH",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "USERID",
            "tableName": "GROUPUSER",
            "tableColumnName": "USERID"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS",
            "viewColumnName": "APP",
            "tableName": "APPLICATIONAUTH",
            "tableColumnName": "APP"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "groupuser.groupname=siteauth.groupname  \nand groupuser.groupname=maxgroup.groupname \nand maxgroup.independent = 1  \nand siteauth.groupname = applicationauth.groupname\nunion all \n(\n\tselect distinct a.orgid, b.userid, c1.app\n\tfrom siteauth a, groupuser b, maxgroup m \n\tleft outer join applicationauth c1 on\n\tc1.groupname in (select groupname from applicationauth where applicationauth.app = c1.app) \n\twhere  b.groupname=a.groupname  \n\tand b.groupname=m.groupname \n\tand m.independent = 0\n\tand exists \n\t(\n\t\tselect 1 \n\t\tfrom  maxgroup m2, applicationauth c, groupuser d \n\t\twhere  d.userid = b.userid  \n\t\tand d.groupname = m2.groupname \n\t\tand d.groupname = c.groupname \n\t\tand  m2.independent = 0 \n\t\tand ((c.app = c1.app) or c1.app is null)  \n\t) \n) \n  \t\t",
        "viewselect": "select siteauth.orgid, groupuser.userid, applicationauth.app",
        "viewfrom": "siteauth, groupuser, maxgroup, applicationauth"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}