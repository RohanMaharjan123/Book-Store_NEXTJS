from rest_framework import generics, permissions
from ..models import Customer
from ..serializers import CustomerSerializer

class CustomerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Customer.objects.filter(user=self.request.user)
        return Customer.objects.none()
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CustomerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [permissions.IsAuthenticated]