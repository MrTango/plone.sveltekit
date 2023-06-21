# -*- coding: utf-8 -*-
from plone import api
from plone.base.defaultpage import get_default_page
from plone.restapi.interfaces import IExpandableElement
from plone.restapi.services import Service
from plone.restapi.interfaces import ISerializeToJson
from zope.component import adapter
from zope.interface import Interface
from zope.interface import implementer
from zope.component import getMultiAdapter
from Products.CMFDynamicViewFTI.interfaces import IBrowserDefault


@implementer(IExpandableElement)
@adapter(Interface, Interface)
class DefaultPage(object):
    def __init__(self, context, request):
        self.context = context.aq_explicit
        self.request = request

    def __call__(self, expand=False):
        result = {
            "default_page": {
                "@id": "{}/@default_page".format(
                    self.context.absolute_url(),
                ),
            },
        }
        if not expand:
            return result
        default_page_id = get_default_page(self.context)
        if default_page_id:
            print(default_page_id)
            default_page = self.context._getOb(default_page_id)
            result['default_page'] = getMultiAdapter(
                (default_page, self.request), ISerializeToJson)()

        # serializer = queryMultiAdapter((self.context, self.request), ISerializeToJson)
        # if serializer is None:
        #     self.request.response.setStatus(501)
        #     return dict(error=dict(message="No serializer available."))
        # scontent = serializer(version=self.request.get("version"))
        # context = self.publishTraverse(self.request, default_page_id)
        # serializer = ISerializeToJson(default_page)
        return result


class DefaultPageGet(Service):
    def reply(self):
        service_factory = DefaultPage(self.context, self.request)
        return service_factory(expand=True)["default_page"]
